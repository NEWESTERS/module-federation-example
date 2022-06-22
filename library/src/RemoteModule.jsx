import React, { lazy } from "react";

import loadRemoteModule from "./loadComponent";
import useDynamicScript from "./useDynamicScript";
import SafeSuspense from "./SafeSuspense";

const RemoteModule = ({
  url,
  errorFallback,
  loader,
  remoteName,
  moduleName,
  componentProps = {},
}) => {
  const state = useDynamicScript(url);

  if (state === "loading" || state === "idle") {
    return <>{loader}</>;
  }

  if (state === "error") {
    return <>{errorFallback}</>;
  }

  const Component = lazy(loadRemoteModule(remoteName, moduleName));

  return (
    <SafeSuspense loader={loader} errorFallback={errorFallback}>
      <Component {...componentProps} />
    </SafeSuspense>
  );
};

export default RemoteModule;
