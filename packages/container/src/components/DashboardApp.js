import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/DashboardApp';

export default () => {
  const nodeRef = useRef(null);

  useEffect(() => {
    mount(nodeRef.current);
  }, []);

  return <div ref={nodeRef} />;
};
