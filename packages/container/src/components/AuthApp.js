import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {
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
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={nodeRef} />;
};
