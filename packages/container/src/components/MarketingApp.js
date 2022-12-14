import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

export default () => {
  const nodeRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(nodeRef.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname === nextPathname) return;

        history.push(nextPathname);
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={nodeRef} />;
};
