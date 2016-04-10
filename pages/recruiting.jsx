import React, { PropTypes } from 'react';

import Frontdoor from '../components/frontdoor.jsx';
import Root from '../components/root.jsx';
import Section from '../components/section.jsx';

export default function Recruiting(props) {
  return (
    <Root>
      <Frontdoor variant="2" page={props.page}>
        Finden Sie mit uns die richtigen Mitarbeiter!
      </Frontdoor>
      <Section id="recruiting" white>
        <h1 className="page-header">RECRUITING</h1>
        <p>
          Mobile Endgeräte (Smartphones oder Tablet-PCs) werden häufiger verwendet. Das hat
          direkte Auswirkungen auf Ihr Recruiting. Heutzutage informieren sich mögliche Bewerber
          über Ihrer Homepage. Deshalb sind überzeugende und mobil-optimierte Karriereseiten
          unverzichtbar – aber noch nicht genug!
        </p>
        <p>
          Als Arbeitgeber müssen Sie sich dort bewegen, wo sich Ihre Zielgruppe aufgrund ihrer
          Mediengewohnheiten aufhält. Gerade um junge Menschen der Generation Y rekrutieren zu
          können, brauchen Sie eine sehr gute Präsenz in Social Media-Anwendungen.
        </p>
        <p>
          Wir unterstützen Sie dabei z.B. durch:
        </p>
        <ul>
          <li>Nutzung mehrerer Social Media Plattformen (Facebook, LinkedIn, Xing, ...)</li>
          <li>Zielgruppen spezifische Anzeigenschaltung</li>
          <li>Landing Pages und Microsites für Ihr Unternehmen</li>
          <li>Individuelles Design mit höchster Flexibilität</li>
          <li>Einfaches Management von Bewerbungen</li>
        </ul>
        <p>
          Wir zeigen Ihnen, wie Sie die Möglichkeiten des E-Recruitings optimal ausschöpfen
          können. Damit sparen Sie wertvolle Zeit, Nerven und Geld.
        </p>
      </Section>
    </Root>
  );
}

Recruiting.propTypes = {
  page: PropTypes.string.isRequired,
};
