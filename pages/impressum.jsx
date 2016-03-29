import React from 'react';

import Root from '../components/root';

export default function Impressum() {
  return (
    <Root>
      <div className="container"><br /><a href="/"><i className="fa fa-chevron-left" /> Zurück</a>
        <hr />
        <h1>Impressum</h1>
        <h2>Angaben gemäß § 5 TMG:</h2>
        <p>pigWOLF GbR<br />Gustav-Merz-Str. 8<br />88400 Biberach</p>
        <h2>Vertreten durch:</h2>
        <p>Pascal Weber<br />Andreas Baier<br />Dominik Burgdörfer<br />Deniz Altinok</p>
        <h2>Kontakt:</h2>
        <table>
          <tbody><tr>
              <td>Telefon:</td>
              <td />
            </tr>
            <tr>
              <td>E-Mail:</td>
              <td>info@pigwolf.com</td>
            </tr>
          </tbody></table>
        <h2>Umsatzsteuer-ID:</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />DE304909071</p>
        <p>&nbsp;</p>
        <p>
          Quelle: <em>
          <a href="http://www.e-recht24.de/impressum-generator.html">
            http://www.e-recht24.de
          </a>
          </em>
        </p>
      </div>
    </Root>
  );
}
