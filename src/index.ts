import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette
} from '@jupyterlab/apputils';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab_nbk-share extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_nbk-share',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab_nbk-share is activated!');
  }
};

export default extension;
