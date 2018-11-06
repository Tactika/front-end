import React from 'react';
import Modal from 'components/_common_/Modal/Modal';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import WarningSign from 'static/images/icons/FontAwesome/exclamation-triangle-solid.svg';
import { s3 } from 'common/constants/urls';
import Router from 'next/router';
import styles from './UpgradeBrowserOverlay.css';

function UpgradeBrowserOverlay() {
  const browsers = [
    {
      browserName: 'Microsoft Edge',
      imageSource: `${s3}browserLogos/edge-icon.png`,
      downloadLink: 'https://www.microsoft.com/windows/microsoft-edge',
    },
    {
      browserName: 'Google Chrome',
      imageSource: `${s3}browserLogos/chrome-icon.png`,
      downloadLink: 'https://www.google.com/chrome',
    },
    {
      browserName: 'Mozilla Firefox',
      imageSource: `${s3}browserLogos/firefox-icon.png`,
      downloadLink: 'https://www.mozilla.org/firefox/new',
    },
    {
      browserName: 'Safari',
      imageSource: `${s3}browserLogos/safari-icon.png`,
      downloadLink: 'https://support.apple.com/downloads/safari',
    },
  ];

  return (
    <Modal
      onRequestClose={() => {}}
      className={styles.UpgradeBrowserOverlay}
      screenReaderLabel="Upgrade Your Browser"
      hasCloseIcon={false}
      isOpen
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={false}
    >
      <WarningSign className={styles.warningLogo} />
      <h1>Please Upgrade Your Browser</h1>
      <div className={styles.message}>
        You might be experiencing some problems viewing this page. Use the links below to download
        or upgrade your existing browser for a seamless experience.
      </div>
      <div className={styles.browsersList}>
        {browsers.map(({ browserName, imageSource, downloadLink }) => (
          <div className={styles.browser} key={browserName}>
            <span className={styles.browserName}>{browserName}</span>
            <OutboundLink
              analyticsEventLabel={`${browserName} Download from <UpgradeBrowserOverlay>`}
              hasIcon={false}
              href={downloadLink}
              router={Router}
            >
              <img className={styles.browserImage} src={imageSource} alt={`${browserName} Logo`} />
            </OutboundLink>
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default Router.withRouter(UpgradeBrowserOverlay);
