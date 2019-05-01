import * as React from 'react';
import { ControlsAreaPage, IControlsPageProps } from '../ControlsAreaPage';
import { ModalPageProps } from './ModalPage.doc';

export const ModalPage: React.StatelessComponent<IControlsPageProps> = props => {
  return <ControlsAreaPage {...props} {...ModalPageProps[props.platform]} />;
};
