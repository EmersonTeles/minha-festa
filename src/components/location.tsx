export default function Location() {
  return (
    <section className="location" id="loc">
      <div className="location_content">
        <h1>Como chegar?</h1>
        <p>
          Para aqueles que não tem carro, a gente dá um jeitinho de organizar as caronas, então não
          se preocupa.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d245675.6076860941!2d-48.51169827616162!3d-15.820746280641362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x935a328bd8bc60c1%3A0xd082313d70393121!2sTaguatinga%20Shopping%20-%20Taguatinga%2C%20Federal%20District%2C%20Brasilia%20-%20Federal%20District!3m2!1d-15.841409899999999!2d-48.0439961!4m5!1s0x935b8b328c3d1897%3A0xa353aaaf5b2e1a0b!2srecanto%20dos%20ferreiras%20santos%20ta%20dunino!3m2!1d-15.775395!2d-48.654782!5e0!3m2!1spt-BR!2sbr!4v1683059444727!5m2!1spt-BR!2sbr"
          width="1000"
          height="600"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="mapa"
        ></iframe>
      </div>
    </section>
  );
}
