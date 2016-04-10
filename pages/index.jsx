import React, { PropTypes } from 'react';

import Root from '../components/root.jsx';
import Frontdoor from '../components/frontdoor.jsx';
import IconCard from '../components/icon_card.jsx';
import Section from '../components/section.jsx';

export default function IndexPage(props) {
  return (
    <Root>
      <Frontdoor page={props.page}>
        Pigwolf bietet Ihnen die richtige Strategie
        für intelligentes Wachstum!
      </Frontdoor>
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
          href="/marketing.html"
          className="btn btn-lg btn-flat btn-flat--thick btn-flat--white"
        >
          Mehr zum Thema Marketing
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
      <Section white>
        <div className="text-center">
          <p>
            Bis in die 1990er Jahre wurden neue Mitarbeiter ausschließlich über Stellenausschreibung
            in Zeitungen gewonnen. Durch die Weiterentwicklung des Internets verlagerte sich das
            Recruiting. Wer heute eine neue Stelle sucht, geht online.
          </p>
          <br />
          <a
            href="/recruiting.html"
            className="btn btn-lg btn-flat btn-flat--thick btn-flat--black"
          >
            Mehr zum Thema Recruiting
          </a>
        </div>
      </Section>
      <Section>
        <p>Intelligent wachsen mit pigWOLF.</p>
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
    </Root>
  );
}

IndexPage.propTypes = {
  page: PropTypes.string.isRequired,
};
