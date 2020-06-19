import React, { useState, useEffect, useRef } from 'react';
import cls from 'classnames';
import { Spin, message } from 'antd';
import { FileProvider } from '@providers/file';
import style from './index.module.scss';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

interface IProps {
  value: string;
  onChange: (arg: any) => void;
}

let ToastEditor;

export const Editor: React.FC<IProps> = ({ value = '', onChange }) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    ref.current.editorInst.setHtml(value);
  }, [mounted, value]);

  useEffect(() => {
    Promise.all([import('@toast-ui/react-editor')]).then((res) => {
      ToastEditor = res[0].Editor;
      setMounted(true);
    });

    return () => {
      setMounted(false);
    };
  }, []);

  const upload = (param) => {
    let size = param.file.size || 0;

    if (size < 1024 * 1024 * 0.1) {
      // 100 k 以下图片直接 base64
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = function () {
          resolve(this.result);
        };
        reader.readAsDataURL(param.file);
      });
    } else {
      let hide = () => {};
      if (size > 1024 * 1024 * 4) {
        hide = message.loading('文件上传中...', 0);
      }

      return FileProvider.uploadFile(param.file)
        .then((res) => {
          hide();
          return res.url;
        })
        .catch(() => {
          hide();
          message.error('文件上传失败，可能过大！');
        });
    }
  };

  return mounted ? (
    <div className={cls(style.wrapper, '')}>
      <ToastEditor
        ref={ref}
        previewStyle="vertical"
        height="800px"
        initialEditType="markdown"
        useCommandShortcut={true}
        language={'zh'}
        placeholder="请输入文章内容"
        hooks={{
          addImageBlobHook: function (file, callback) {
            upload({ file }).then((url) => {
              callback(url, file.name);
            });
          },
        }}
        onChange={() => {
          const html = ref.current.editorInst.getHtml();
          onChange(html);
        }}
      />
    </div>
  ) : (
    <Spin tip="编辑器努力加载中..." spinning={true}></Spin>
  );
};
