import React from 'react';
import Api from './Api';
import * as S from "./Style"

export default class App extends React.Component {
  render() {
    return (
      <>
      <S.GlobalStyle/>
      <Api/>
      </>
    )
  }
}