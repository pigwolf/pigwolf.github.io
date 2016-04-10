import React, { PropTypes } from 'react';

import Frontdoor from '../components/frontdoor.jsx';
import Root from '../components/root.jsx';
import Section from '../components/section.jsx';

export default function Recruiting(props) {
  return (
    <Root>
      <Frontdoor variant="3" page={props.page}>
        Wir bringen Ihr Marketing auf Kurs!
      </Frontdoor>
      <Section id="recruiting" white>
        <h1 className="page-header">MARKETING</h1>
        <p>
          Wir helfen Ihnen, von den Vorteilen des Online-Marketings zu profitieren und Ihr
          Unternehmen im Umfeld des modernen E-Commerce voranzubringen. Nur ein aktiver
          Unternehmer besteht im Wettbewerb.
        </p>
        <p>
          Durch unser Marketing-System ist es möglich, regional und überregional Ihre Zielgruppe
          zu erreichen und das Kundenfeld nach Ihren Kriterien einzugrenzen.
        </p>
        <p>Wir bieten Ihnen: </p>
        <ul>
          <li>Werbung auf verschiedenen Plattformen</li>
          <li>Regionale, überregionale und internationale Kundensuche</li>
          <li>Individuelle Softwarelösungen</li>
          <li>Sicheres und modernes Hosting</li>
        </ul>
        <p>
          Betreiben Sie kein <i>Small Thinking Marketing</i> sondern schöpfen Sie alle
          Möglichkeiten des <i>Big Thinking Marketings</i> aus, um Ihre Zielgruppe überlegt
          anzusprechen und das gesamte Potential Ihres Unternehmens zu entfalten.
        </p>
      </Section>
    </Root>
  );
}

Recruiting.propTypes = {
  page: PropTypes.string.isRequired,
};
