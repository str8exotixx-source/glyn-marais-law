export type AttorneyProfile = {
  name: string;
  position: string;
  focus: string;
  biography: string;
};

export const attorneys: AttorneyProfile[] = [
  {
    name: "Richard Glyn",
    position: "Director",
    focus: "Project finance · Cross-border transactions · Banking",
    biography:
      "Advises banking consortia on major capital projects and complex financing across infrastructure, transport, utilities and industry. His work includes cross-border structures and project finance for roads, airports and water plants.",
  },
  {
    name: "Francois Marais",
    position: "Founding partner & senior director",
    focus: "Corporate finance · M&A · Private equity",
    biography:
      "His corporate finance practice spans mergers, takeovers, listings, private equity, leveraged buyouts, joint ventures and privatisation, informed by earlier experience in merchant banking.",
  },
  {
    name: "Brian Frank",
    position: "Senior director",
    focus: "Commercial property · Conveyancing · Property portfolios",
    biography:
      "An attorney, conveyancer and notary public since 1982, with broad experience in retail, industrial and residential property, major property portfolios and large-scale developments.",
  },
  {
    name: "Willem de Villiers",
    position: "Director",
    focus: "M&A · Banking & finance · Restructuring",
    biography:
      "Heads the Commercial Department. Advises financial institutions and companies on mergers and acquisitions, financing transactions and restructurings. Also qualified as a solicitor in England and Wales.",
  },
  {
    name: "Riaan du Plessis",
    position: "Director",
    focus: "Commercial litigation · Arbitration · Insolvency",
    biography:
      "His listed areas include arbitration, commercial and corporate litigation, company law, competition, insurance and insolvency. He has helped prepare legal structures for resorts and nature reserves.",
  },
  {
    name: "Tamara Gerwel",
    position: "Director",
    focus: "M&A · Joint ventures · Corporate transactions",
    biography:
      "Works in the Corporate and Commercial Department on mergers, acquisitions, restructurings, joint ventures and funding arrangements, with particular experience in warranty and indemnity insurance.",
  },
  {
    name: "Robert January",
    position: "Director",
    focus: "Commercial litigation · Arbitration · Mediation",
    biography:
      "His listed areas of practice include arbitration, company law, deceased estates, commercial litigation and mediation. He has also helped prepare legal structures for resorts and nature reserves.",
  },
];

export const practiceAreas = [
  {
    number: "01",
    title: "Corporate & commercial",
    detail: "Company law, commercial agreements, governance and strategic transactions.",
  },
  {
    number: "02",
    title: "Mergers & acquisitions",
    detail: "Public and private M&A, joint ventures, takeovers and cross-border deals.",
  },
  {
    number: "03",
    title: "Banking & finance",
    detail: "Project, structured and corporate finance; security and capital markets.",
  },
  {
    number: "04",
    title: "Property & conveyancing",
    detail: "Property transactions, development, commercial leases and conveyancing.",
  },
  {
    number: "05",
    title: "Dispute resolution",
    detail: "Commercial and corporate litigation, arbitration and mediation.",
  },
  {
    number: "06",
    title: "Restructuring & insolvency",
    detail: "Restructurings, insolvency, liquidation and complex creditor matters.",
  },
];