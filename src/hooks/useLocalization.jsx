import React, { useContext } from 'react';
import { Context } from '../context/languages';

export const useLocalization = (setterOnly = false) => {
  const ctx = useContext(Context);
  console.log(ctx);
  return setterOnly ? [ctx.setLang] : [ctx.lang, ctx.setLang]
}