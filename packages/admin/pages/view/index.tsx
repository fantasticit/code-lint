import React, { useState, useCallback } from 'react';
import { NextPage } from 'next';
import { Badge, Popconfirm, Divider, Modal, Descriptions, message } from 'antd';
import * as dayjs from 'dayjs';
import UAParser from 'ua-parser-js';
import { AdminLayout } from '@/layout/AdminLayout';
import { ViewProvider } from '@/providers/view';
import { SPTDataTable } from '@/components/SPTDataTable';
import style from './index.module.scss';

function showInfo({ title, content }) {
  Modal.info({
    title,
    icon: null,
    content,
    okText: '确认',
    onOk() {},
  });
}

// 解析 ip 地址
const parseIp = (ip, userAgent) => {
  const hide = message.loading('正在解析中', 0);
  const uaparser = new UAParser();
  uaparser.setUA(userAgent);
  const uaInfo = uaparser.getResult();
  const content = [
    <Descriptions.Item label="浏览器">
      {uaInfo.browser.name} {uaInfo.browser.version}
    </Descriptions.Item>,
    <Descriptions.Item label="内核">
      {uaInfo.engine.name} {uaInfo.engine.version}
    </Descriptions.Item>,
    <Descriptions.Item label="操作系统">
      {uaInfo.os.name} {uaInfo.os.version}
    </Descriptions.Item>,
    <Descriptions.Item label="设备">
      {uaInfo.device.vendor
        ? uaInfo.device.vendor +
          ' ' +
          uaInfo.device.model +
          ' ' +
          uaInfo.device.type
        : '未知设备'}
    </Descriptions.Item>,
  ];

  const handle = () => {
    showInfo({
      title: ip,
      content: (
        <Descriptions
          title={null}
          bordered
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        >
          {content}
        </Descriptions>
      ),
    });
    hide();
  };

  ViewProvider.parseIp(ip)
    .then(res => {
      content.push(<Descriptions.Item label="IP">{res}</Descriptions.Item>);
      handle();
    })
    .catch(e => {
      content.push(<Descriptions.Item label="IP">解析失败</Descriptions.Item>);
      handle();
    });
};

const Views: NextPage = () => {
  const [views, setViews] = useState<IView[]>([]);
  const [loading, setLoaidng] = useState(false);
  const [params, setParams] = useState(null);

  const getViews = useCallback(params => {
    if (loading) {
      return;
    }

    setLoaidng(true);
    return ViewProvider.getViews(params)
      .then(res => {
        setParams(params);
        setViews(res[0]);
        setLoaidng(false);
        return res;
      })
      .catch(() => setLoaidng(false));
  }, []);

  // 删除
  const deleteView = useCallback(
    id => {
      ViewProvider.deleteView(id).then(() => {
        message.success('访问删除成功');
        getViews(params);
      });
    },
    [params]
  );

  const columns = [
    {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip',
      width: '10%',
    },
    {
      title: 'User Agent',
      dataIndex: 'userAgent',
      key: 'userAgent',
      width: '30%',
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
      width: '20%',
      render: url => (
        <a className={style.link} href={url} target="_blank">
          {url}
        </a>
      ),
    },
    {
      title: '访问量',
      dataIndex: 'count',
      key: 'count',
      render: views => (
        <Badge
          count={views}
          showZero={true}
          overflowCount={Infinity}
          style={{ backgroundColor: '#52c41a' }}
        />
      ),
    },
    {
      title: '访问时间',
      dataIndex: 'updateAt',
      key: 'updateAt',
      render: date => dayjs.default(date).format('YYYY-MM-DD HH:mm:ss'),
    },
  ];

  const actionColumn = {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <span className={style.action}>
        <a
          onClick={() => {
            parseIp(record.ip, record.userAgent);
          }}
        >
          解析
        </a>
        <Divider type="vertical" />
        <Popconfirm
          title="确认删除这个访问？"
          onConfirm={() => deleteView(record.id)}
          okText="确认"
          cancelText="取消"
        >
          <a>删除</a>
        </Popconfirm>
      </span>
    ),
  };

  return (
    <AdminLayout>
      <div className={style.wrapper}>
        <SPTDataTable
          data={views}
          defaultTotal={0}
          columns={[...columns, actionColumn]}
          searchFields={[
            {
              label: 'IP',
              field: 'ip',
              msg: '请输入 IP 地址',
            },
            {
              label: 'User Agent',
              field: 'userAgent',
              msg: '请输入 User Agent',
            },
            {
              label: 'URL',
              field: 'url',
              msg: '请输入 URL',
            },
          ]}
          onSearch={getViews}
        />
      </div>
    </AdminLayout>
  );
};

export default Views;
