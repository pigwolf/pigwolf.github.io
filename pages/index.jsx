import React from 'react';

import Root from '../components/root.jsx';
import Frontdoor from '../components/frontdoor.jsx';
import IconCard from '../components/icon_card.jsx';
import Section from '../components/section.jsx';

export default function IndexPage() {
  return (
    <Root>
      <Frontdoor>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <IconCard icon="fa fa-thumbs-up">
                <h3>Kunden finden</h3>
                <p>Sie sind ständig auf der Suche nach neuen Kunden?</p>
                <a
                  href="//board.pigwolf.com/#/offers/new?intention=1"
                  className="btn btn-flat btn-flat--black"
                >
                  <i className="fa fa-thumbs-up" /> Ja
                </a>
              </IconCard>
            </div>
            <div className="col-md-4">
              <IconCard icon="fa fa-users">
                <h3>Bewerber finden</h3>
                <p>Sie brauchen qualifizierte Arbeitskräfte für Ihr Unternehmen?</p>
                <a
                  href="//board.pigwolf.com/#/offers/new?intention=2"
                  className="btn btn-flat btn-flat--black"
                >
                  <i className="fa fa-thumbs-up" /> Ja
                </a>
              </IconCard>
            </div>
            <div className="col-md-4">
              <IconCard icon="fa fa-bolt">
                <h3>Kundeninteraktion</h3>
                <p>Sie möchten besser mit Ihrem Kundenstamm kommunizieren?</p>
                <a
                  href="//board.pigwolf.com/#/offers/new?intention=3"
                  className="btn btn-flat btn-flat--black"
                >
                  <i className="fa fa-thumbs-up" /> Ja
                </a>
              </IconCard>
            </div>
          </div>
        </div>
        <Section>
          <p>
            Was früher der Marktplatz für den Händler war, ist heute das Internet. Für ein
            modernes Unternehmen bietet das Internet unendlich viele Möglichkeiten. Es gibt Ihnen
            die Chance, jeden Menschen gezielt und unabhängig von seinem Standort zu erreichen.
          </p>
          <br />
          <a
            href="//board.pigwolf.com"
            className="btn btn-lg btn-flat btn-flat--thick btn-flat--white"
          >
            Legen Sie los!
          </a>
        </Section>
        <div className="container margin-top hidden-sm hidden-xs">
          <div data-ride="carousel" className="frontdoor-carousel carousel">
            <div className="frontdoor-carousel__background" />
            {/* Indicators*/}
            <ol className="carousel-indicators">
              <li data-target=".carousel" data-slide-to={0} className />
              <li data-target=".carousel" data-slide-to={1} className />
              <li data-target=".carousel" data-slide-to={2} className="active" />
            </ol>
            {/* Wrapper for slides*/}
            <div role="listbox" className="carousel-inner">
              <div className="item">
                <div className="slide">
                  Warum auf diesem Weg nicht
                  <br />
                  neue Zielgruppen erreichen und zusätzliche Geschäftsfelder erschließen?
                </div>
                <div className="carousel-caption" />
              </div>
              <div className="item">
                <div className="slide">
                  Warum auf diesem Weg nicht
                  <br />
                  gezielt junge, qualifizierte und motivierte Mitarbeiter finden?
                </div>
                <div className="carousel-caption" />
              </div>
              <div className="item active">
                <div className="slide">
                  Warum auf diesem Weg nicht
                  <br />
                  Menschen von der eigenen Marke begeistern?
                </div>
                <div className="carousel-caption" />
              </div>
            </div>
            {/* Controls*/}
            <a href=".carousel" role="button" data-slide="prev" className="left carousel-control">
              <span aria-hidden="true" className="glyphicon glyphicon-chevron-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a href=".carousel" role="button" data-slide="next" className="right carousel-control">
              <span aria-hidden="true" className="glyphicon glyphicon-chevron-right" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <Section id="marketing" white>
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
        <Section>
          <p>
            Bis in die 1990er Jahre wurden neue Mitarbeiter ausschließlich über Stellenausschreibung
            in Zeitungen gewonnen. Durch die Weiterentwicklung des Internets verlagerte sich das
            Recruiting. Wer heute eine neue Stelle sucht, geht online.
          </p>
        </Section>
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
        <Section>
          <p>Intelligent wachsen mit pigWOLF.</p>
          <br />
          <a
            href="//board.pigwolf.com"
            className="btn btn-lg btn-flat btn-flat--thick btn-flat--white"
          >
            Wachsen Sie mit!
          </a>
        </Section>
        <Section id="team" white>
          <h1 className="page-header">TEAM</h1>
          <div className="row">
            <div className="col-md-8">
              <p>
                Unser Team besteht aus Experten der Bereiche Vertrieb, Marketing,
                Technologiemanagement, Social Network Analysis, Künstliche Intelligenz, Informatik
                und Controlling. Dadurch ist eine ganzheitliche Betrachtung Ihres Unternehmens
                sichergestellt.
              </p>
              <p>
                Wir entwickeln Strategien und Systeme, die optimal an Ihre Mitarbeiter und Ihre
                Unternehmenswerte angepasst sind. Für uns ist ein gesundes Wachstum Ihres
                Unternehmens der wichtigste Maßstab.
              </p>
            </div>
            <div className="col-md-4">
              <img src="/images/team.jpg" className="img-responsive img-rounded img-thumbnail" />
            </div>
          </div>
        </Section>
      </Frontdoor>
    </Root>
  );
}