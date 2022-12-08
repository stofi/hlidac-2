/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Address {
  name?: string | null;
  iP6Address?: string | null;
  canConnect?: boolean | null;
}

export interface Availability {
  /** @format date-time */
  time?: string;
  /** @format double */
  responseTimeInSec?: number | null;
  /** @format int32 */
  httpStatusCode?: number | null;
  /** @format double */
  downloadSpeed?: number | null;
}

export interface AvailabilityStatistics {
  /** @format date-time */
  minDate?: string;
  /** @format date-time */
  maxDate?: string;
  durationTotal?: TimeSpanMeasureStatus;
  longestDuration?: TimeSpanMeasureStatus;
  percentOfTime?: DecimalMeasureStatus;
}

export interface BlurredPagesStats {
  /** @format double */
  blurredAreaPerc?: number;
  /** @format int32 */
  numOfBlurredPages?: number;
  /** @format int32 */
  numOfExtensivelyBlurredPages?: number;
  listOfExtensivelyBlurredPages?: number[] | null;
  allPagesAnalyzed?: boolean | null;
  /** @format date-time */
  created?: string | null;
}

export interface Cerpani {
  /** @format double */
  castkaSpotrebovana?: number | null;
  /** @format int32 */
  rok?: number | null;
  /** @format int32 */
  guessedYear?: number | null;
}

export interface Change {
  parameterName?: string | null;
  previousValue?: string | null;
  newValue?: string | null;
}

export interface Classification {
  /** @format int32 */
  typeValue?: number;
  /** @format double */
  classifProbability?: number;
  rootClassification?: boolean;
}

export interface DSCreatedDTO {
  datasetId?: string | null;
}

export interface DSItemResponseDTO {
  id?: string | null;
}

/** @format int32 */
export enum DataQualityEnum {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
}

export interface DecimalMeasureStatus {
  /** @format double */
  ok?: number;
  /** @format double */
  pomale?: number;
  /** @format double */
  nedostupne?: number;
  /** @format double */
  unknown?: number;
}

export interface Document {
  sha256Checksum?: string | null;
  oficialUrl?: string | null;
  directUrl?: string | null;
  typDokumentu?: string | null;
  /** @format date-time */
  vlozenoNaProfil?: string | null;
  cisloVerze?: string | null;
  plainText?: string | null;
  plainTextContentQuality?: DataQualityEnum;
  /** @format date-time */
  lastUpdate?: string | null;
  /** @format date-time */
  lastProcessed?: string | null;
  contentType?: string | null;
  /** @format int32 */
  lenght?: number;
  /** @format int32 */
  wordCount?: number;
  /** @format int32 */
  pages?: number;
  storageId?: string | null;
  plainDocumentId?: string | null;
  name?: string | null;
  enoughExtractedText?: boolean;
}

export interface Dokument {
  id?: string | null;
  /** @format int32 */
  typUdalosti?: number;
  /** @format date-time */
  datumVlozeni?: string;
  popis?: string | null;
  url?: string | null;
  oddil?: string | null;
  plainText?: string | null;
  /** @format int64 */
  lenght?: number;
  /** @format int64 */
  wordCount?: number;
  /** @format date-time */
  lastUpdate?: string | null;
  enoughExtractedText?: boolean;
}

export interface Dotace {
  idDotace?: string | null;
  /** @format date-time */
  datumPodpisu?: string | null;
  /** @format date-time */
  datumAktualizace?: string | null;
  kodProjektu?: string | null;
  nazevProjektu?: string | null;
  zdroj?: Zdroj;
  prijemce?: Prijemce;
  program?: DotacniProgram;
  /** @format double */
  dotaceCelkem?: number | null;
  /** @format double */
  pujckaCelkem?: number | null;
  rozhodnuti?: Rozhodnuti[] | null;
  duplicita?: string | null;
  chyba?: string[] | null;
}

export interface DotaceSearchResultDTO {
  /** @format int64 */
  total?: number;
  /** @format int32 */
  page?: number;
  results?: Dotace[] | null;
}

export interface DotacniProgram {
  id?: string | null;
  nazev?: string | null;
  kod?: string | null;
  url?: string | null;
}

export interface DumpInfoModel {
  url?: string | null;
  /** @format date-time */
  date?: string | null;
  /** @format int64 */
  size?: number;
  fulldump?: boolean;
  /** @format date-time */
  created?: string;
  dataType?: string | null;
}

export interface Enhancement {
  /** @format date-time */
  created?: string;
  title?: string | null;
  description?: string | null;
  changed?: Change;
  public?: boolean;
  enhancerType?: string | null;
}

export interface FirmaDTO {
  ico?: string | null;
  jmeno?: string | null;
  datoveSchranky?: string[] | null;
  /** @format date-time */
  zalozena?: string | null;
}

export interface FirmaSocialDTO {
  ico?: string | null;
  jmeno?: string | null;
  profile?: string | null;
  socialniSite?: SocialNetworkDTO[] | null;
}

export interface Formular {
  cislo?: string | null;
  druh?: string | null;
  typFormulare?: string | null;
  limitVZ?: string | null;
  druhRizeni?: string | null;
  /** @format date-time */
  zverejnen?: string | null;
  url?: string | null;
  onlyOnProfile?: boolean;
}

export interface HintSmlouva {
  /** @format date-time */
  updated?: string | null;
  /** @format int32 */
  smlouvaULimitu?: number;
  /** @format int32 */
  denUzavreni?: number;
  /** @format int32 */
  smlouvaSPolitickyAngazovanymSubjektem?: number;
  /** @format int32 */
  pocetDniOdZalozeniFirmy?: number;
  /** @format int32 */
  vztahSeSoukromymSubjektem?: number;
  /** @format int32 */
  skrytaCena?: number;
}

export interface HodnoticiKriteria {
  /** @format int32 */
  poradi?: number;
  kriterium?: string | null;
  nazev?: string | null;
  /** @format double */
  vaha?: number;
}

export interface HostAvailability {
  host?: UptimeServer;
  data?: Availability[] | null;
}

export interface HttpContent {
  headers?: StringStringIEnumerableKeyValuePair[] | null;
}

export interface HttpMethod {
  method?: string | null;
}

export interface HttpRequestMessage {
  version?: Version;
  versionPolicy?: HttpVersionPolicy;
  content?: HttpContent;
  method?: HttpMethod;
  /** @format uri */
  requestUri?: string | null;
  headers?: StringStringIEnumerableKeyValuePair[] | null;
  /** @deprecated */
  properties?: Record<string, any>;
  options?: Record<string, any>;
}

export interface HttpResponseMessage {
  version?: Version;
  content?: HttpContent;
  statusCode?: HttpStatusCode;
  reasonPhrase?: string | null;
  headers?: StringStringIEnumerableKeyValuePair[] | null;
  trailingHeaders?: StringStringIEnumerableKeyValuePair[] | null;
  requestMessage?: HttpRequestMessage;
  isSuccessStatusCode?: boolean;
}

/** @format int32 */
export enum HttpStatusCode {
  Value100 = 100,
  Value101 = 101,
  Value102 = 102,
  Value103 = 103,
  Value200 = 200,
  Value201 = 201,
  Value202 = 202,
  Value203 = 203,
  Value204 = 204,
  Value205 = 205,
  Value206 = 206,
  Value207 = 207,
  Value208 = 208,
  Value226 = 226,
  Value300 = 300,
  Value301 = 301,
  Value302 = 302,
  Value303 = 303,
  Value304 = 304,
  Value305 = 305,
  Value306 = 306,
  Value307 = 307,
  Value308 = 308,
  Value400 = 400,
  Value401 = 401,
  Value402 = 402,
  Value403 = 403,
  Value404 = 404,
  Value405 = 405,
  Value406 = 406,
  Value407 = 407,
  Value408 = 408,
  Value409 = 409,
  Value410 = 410,
  Value411 = 411,
  Value412 = 412,
  Value413 = 413,
  Value414 = 414,
  Value415 = 415,
  Value416 = 416,
  Value417 = 417,
  Value421 = 421,
  Value422 = 422,
  Value423 = 423,
  Value424 = 424,
  Value426 = 426,
  Value428 = 428,
  Value429 = 429,
  Value431 = 431,
  Value451 = 451,
  Value500 = 500,
  Value501 = 501,
  Value502 = 502,
  Value503 = 503,
  Value504 = 504,
  Value505 = 505,
  Value506 = 506,
  Value507 = 507,
  Value508 = 508,
  Value510 = 510,
  Value511 = 511,
}

/** @format int32 */
export enum HttpVersionPolicy {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface IP6Support {
  /** @format date-time */
  date?: string;
  site?: string | null;
  site_IPv6Addresses?: Address[] | null;
  site_MX_IPv6Addresses?: Address[] | null;
  site_NS_IPv6Addresses?: Address[] | null;
  log?: string | null;
}

/** @format int32 */
export enum ImportanceLevel {
  Value0 = 0,
  Value1 = 1,
  Value5 = 5,
  Value20 = 20,
  Value100 = 100,
  ValueN1 = -1,
}

export interface Issue {
  /** @format int32 */
  issueTypeId?: number;
  /** @format date-time */
  created?: string;
  title?: string | null;
  textDescription?: string | null;
  public?: boolean;
  permanent?: boolean;
  importance?: ImportanceLevel;
  affectedParams?: KeyValue[] | null;
  analyzerType?: string | null;
}

export interface KeyValue {
  key?: string | null;
  value?: string | null;
}

export interface NedostupnostModel {
  server?: UptimeServer;
  statistics?: AvailabilityStatistics;
}

export interface ObjectSearchResultDTO {
  /** @format int64 */
  total?: number;
  /** @format int32 */
  page?: number;
  results?: any[] | null;
}

export interface Osoba {
  idPuvodce?: string | null;
  idOsoby?: string | null;
  plneJmeno?: string | null;
  role?: string | null;
  typ?: string | null;
  ico?: string | null;
  rc?: string | null;
  /** @format date-time */
  zalozen?: string | null;
  /** @format date-time */
  odstranen?: string | null;
  /** @format date-time */
  datumNarozeni?: string | null;
  mesto?: string | null;
  okres?: string | null;
  zeme?: string | null;
  psc?: string | null;
  osobaId?: string | null;
}

export interface OsobaDTO {
  titulPred?: string | null;
  jmeno?: string | null;
  prijmeni?: string | null;
  titulPo?: string | null;
  /** @format date-time */
  narozeni?: string | null;
  nameId?: string | null;
  profile?: string | null;
}

export interface OsobaDetailDTO {
  titulPred?: string | null;
  jmeno?: string | null;
  prijmeni?: string | null;
  titulPo?: string | null;
  /** @format date-time */
  narozeni?: string | null;
  nameId?: string | null;
  profile?: string | null;
  sponzoring?: OsobaEventDTO[] | null;
  udalosti?: OsobaEventDTO[] | null;
  socialniSite?: SocialNetworkDTO[] | null;
}

export interface OsobaEventDTO {
  typ?: string | null;
  organizace?: string | null;
  role?: string | null;
  /** @format double */
  castka?: number | null;
  /** @format date-time */
  datumOd?: string | null;
  /** @format date-time */
  datumDo?: string | null;
}

export interface OsobaSocialDTO {
  titulPred?: string | null;
  jmeno?: string | null;
  prijmeni?: string | null;
  titulPo?: string | null;
  nameId?: string | null;
  profile?: string | null;
  socialniSite?: SocialNetworkDTO[] | null;
}

/** @format int32 */
export enum PravniRamce {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

export interface Prijemce {
  ico?: string | null;
  obchodniJmeno?: string | null;
  hlidacJmeno?: string | null;
  jmeno?: string | null;
  /** @format int32 */
  rokNarozeni?: number | null;
  obec?: string | null;
  okres?: string | null;
  psc?: string | null;
  ulice?: string | null;
}

export interface Priloha {
  blurredPages?: BlurredPagesStats;
  plainTextContent?: string | null;
  plainTextContentQuality?: DataQualityEnum;
  /** @format date-time */
  lastUpdate?: string;
  /** @format byte */
  localCopy?: string | null;
  contentType?: string | null;
  /** @format int32 */
  lenght?: number;
  /** @format int32 */
  wordCount?: number;
  /** @format int64 */
  uniqueWordsCount?: number;
  /** @format double */
  wordsVariance?: number;
  /** @format int32 */
  pages?: number;
  enoughExtractedText?: boolean;
}

export interface Registration {
  id?: string | null;
  name?: string | null;
  datasetId?: string | null;
  origUrl?: string | null;
  sourcecodeUrl?: string | null;
  description?: string | null;
  jsonSchema?: string | null;
  createdBy?: string | null;
  /** @format date-time */
  created?: string;
  betaversion?: boolean;
  allowWriteAccess?: boolean;
  hidden?: boolean;
  searchResultTemplate?: Template;
  detailTemplate?: Template;
  defaultOrderBy?: string | null;
  orderList?: any[] | null;
}

export interface RegistrationSearchResultDTO {
  /** @format int64 */
  total?: number;
  /** @format int32 */
  page?: number;
  results?: Registration[] | null;
}

export interface Rizeni {
  isFullRecord?: boolean;
  spisovaZnacka?: string | null;
  stav?: string | null;
  /** @format date-time */
  vyskrtnuto?: string | null;
  url?: string | null;
  /** @format date-time */
  datumZalozeni?: string | null;
  /** @format date-time */
  posledniZmena?: string;
  soud?: string | null;
  dokumenty?: Dokument[] | null;
  dluznici?: Osoba[] | null;
  veritele?: Osoba[] | null;
  spravci?: Osoba[] | null;
  onRadar?: boolean;
  odstraneny?: boolean;
}

export interface RizeniSearchResultDTO {
  /** @format int64 */
  total?: number;
  /** @format int32 */
  page?: number;
  results?: Rizeni[] | null;
}

export interface Rozhodnuti {
  /** @format double */
  castkaPozadovana?: number | null;
  /** @format double */
  castkaRozhodnuta?: number | null;
  /** @format double */
  cerpanoCelkem?: number | null;
  jePujcka?: boolean | null;
  icoPoskytovatele?: string | null;
  poskytovatel?: string | null;
  /** @format int32 */
  rok?: number | null;
  zdrojFinanci?: string | null;
  cerpani?: Cerpani[] | null;
}

export interface SClassification {
  /** @deprecated */
  types?: Classification[] | null;
  /** @format date-time */
  lastUpdate?: string | null;
  /** @format int32 */
  version?: number;
  class1?: Classification;
  class2?: Classification;
  class3?: Classification;
}

export interface Smlouva {
  /** @format double */
  calculatedPriceWithVATinCZK?: number;
  calcutatedPriceQuality?: DataQualityEnum;
  /** @format date-time */
  casZverejneni?: string;
  cisloSmlouvy?: string | null;
  ciziMena?: TSmlouvaCiziMena;
  classification?: SClassification;
  /** @format double */
  confidenceValue?: number;
  /** @format date-time */
  datumUzavreni?: string;
  enhancements?: Enhancement[] | null;
  /** @format double */
  hodnotaBezDph?: number | null;
  /** @format double */
  hodnotaVcetneDph?: number | null;
  id?: string | null;
  issues?: Issue[] | null;
  /** @format date-time */
  lastUpdate?: string;
  navazanyZaznam?: string | null;
  odkaz?: string | null;
  platce?: Subjekt;
  platnyZaznam?: boolean;
  pravniRamec?: PravniRamce;
  predmet?: string | null;
  prijemce?: Subjekt[] | null;
  prilohy?: Priloha[] | null;
  schvalil?: string | null;
  souvisejiciSmlouvy?: string[] | null;
  spadaPodRS?: boolean;
  sVazbouNaPolitiky?: boolean | null;
  sVazbouNaPolitikyAktualni?: boolean | null;
  sVazbouNaPolitikyNedavne?: boolean | null;
  hint?: HintSmlouva;
  vkladatelDoRejstriku?: Subjekt;
}

export interface SmlouvaSearchResultDTO {
  /** @format int64 */
  total?: number;
  /** @format int32 */
  page?: number;
  results?: Smlouva[] | null;
}

/** @format int32 */
export enum SocialNetwork {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
}

export interface SocialNetworkDTO {
  type?: string | null;
  id?: string | null;
  url?: string | null;
}

export interface SponzoringDetail {
  nameIdDarce?: string | null;
  jmenoDarce?: string | null;
  prijmeniDarce?: string | null;
  /** @format date-time */
  daumNarozeniDarce?: string | null;
  icoDarce?: string | null;
  icoPrijemce?: string | null;
  typDaru?: TypDaru;
  /** @format double */
  hodnotaDaru?: number;
  popis?: string | null;
  /** @format date-time */
  darovanoDne?: string | null;
}

export interface SslData {
  grade?: string | null;
  /** @format date-time */
  latestCheck?: string | null;
  /** @format date-time */
  sslExpiresAt?: string | null;
}

/** @format int32 */
export enum StavyZakazky {
  Value0 = 0,
  Value1 = 1,
  Value50 = 50,
  Value100 = 100,
  Value200 = 200,
  Value300 = 300,
}

export interface StringStringIEnumerableKeyValuePair {
  key?: string | null;
  value?: string[] | null;
}

export interface Subject {
  ico?: string | null;
  jmeno?: string | null;
  profilZadavatele?: string | null;
}

export interface Subjekt {
  adresa?: string | null;
  datovaSchranka?: string | null;
  ico?: string | null;
  nazev?: string | null;
  utvar?: string | null;
}

export interface Template {
  header?: string | null;
  body?: string | null;
  footer?: string | null;
  title?: string | null;
  properties?: string[] | null;
}

export interface TimeSpan {
  /** @format int64 */
  ticks?: number;
  /** @format int32 */
  days?: number;
  /** @format int32 */
  hours?: number;
  /** @format int32 */
  milliseconds?: number;
  /** @format int32 */
  minutes?: number;
  /** @format int32 */
  seconds?: number;
  /** @format double */
  totalDays?: number;
  /** @format double */
  totalHours?: number;
  /** @format double */
  totalMilliseconds?: number;
  /** @format double */
  totalMinutes?: number;
  /** @format double */
  totalSeconds?: number;
}

export interface TimeSpanMeasureStatus {
  ok?: TimeSpan;
  pomale?: TimeSpan;
  nedostupne?: TimeSpan;
  unknown?: TimeSpan;
}

/** @format int32 */
export enum TypDaru {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface UptimeServer {
  /** @format int32 */
  id: number;
  /** @format int32 */
  active?: number;
  /** @format date-time */
  created: string;
  /**
   * @minLength 0
   * @maxLength 500
   */
  publicUrl: string;
  /**
   * @minLength 0
   * @maxLength 500
   */
  realUrl?: string | null;
  additionalParams?: string | null;
  /**
   * @minLength 0
   * @maxLength 300
   */
  plugin?: string | null;
  /**
   * @minLength 0
   * @maxLength 300
   */
  groups?: string | null;
  /**
   * @minLength 0
   * @maxLength 300
   */
  name: string;
  /** @minLength 1 */
  description: string;
  /**
   * @minLength 0
   * @maxLength 30
   */
  ico?: string | null;
  /** @format int32 */
  priorita: number;
  /** @format int32 */
  intervalInSec: number;
  /** @format date-time */
  lastCheck?: string | null;
  /** @format double */
  lastResponseCode?: number | null;
  /** @format int64 */
  lastResponseTimeInMs?: number | null;
  /** @format int64 */
  lastResponseSize?: number | null;
  /**
   * @minLength 0
   * @maxLength 30
   */
  sslGrade?: string | null;
  /** @format date-time */
  takenByUptimer?: string | null;
  /** @format int32 */
  lastUptimeStatus?: number | null;
  /** @format int32 */
  lastAlertedStatus?: number | null;
  /** @format date-time */
  lastAlertSent?: string | null;
  opendataUrl?: string | null;
  pageUrl?: string | null;
  socialBannerUrl?: string | null;
  pageUrlIdParams?: string | null;
}

export interface VerejnaZakazka {
  onlyOnProfile?: boolean;
  id?: string | null;
  evidencniCisloZakazky?: string | null;
  zakazkaNaProfiluId?: string | null;
  formulare?: Formular[] | null;
  kriteria?: HodnoticiKriteria[] | null;
  /** @format int32 */
  displayId?: number;
  dataset?: string | null;
  zadavatel?: Subject;
  dodavatele?: Subject[] | null;
  nazevZakazky?: string | null;
  popisZakazky?: string | null;
  dokumenty?: Document[] | null;
  cpv?: string[] | null;
  /** @format date-time */
  datumUverejneni?: string | null;
  /** @format date-time */
  lhutaDoruceni?: string | null;
  /** @format date-time */
  lhutaPrihlaseni?: string | null;
  /** @format date-time */
  datumUzavreniSmlouvy?: string | null;
  /** @format date-time */
  posledniZmena?: string | null;
  /** @format int32 */
  stavVZ?: number;
  stavZakazky?: StavyZakazky;
  /** @format date-time */
  lastUpdated?: string | null;
  /** @format double */
  odhadovanaHodnotaBezDPH?: number | null;
  /** @format double */
  konecnaHodnotaBezDPH?: number | null;
  odhadovanaHodnotaMena?: string | null;
  konecnaHodnotaMena?: string | null;
  urlZakazky?: string | null;
  rawHtml?: string | null;
}

export interface VerejnaZakazkaSearchResultDTO {
  /** @format int64 */
  total?: number;
  /** @format int32 */
  page?: number;
  results?: VerejnaZakazka[] | null;
}

export interface Version {
  /** @format int32 */
  major?: number;
  /** @format int32 */
  minor?: number;
  /** @format int32 */
  build?: number;
  /** @format int32 */
  revision?: number;
  /** @format int32 */
  majorRevision?: number;
  /** @format int32 */
  minorRevision?: number;
}

export interface WebStatusExport {
  availability?: HostAvailability;
  ssl?: SslData;
  iPv6Support?: IP6Support;
  detailUrl?: string | null;
}

export interface Zdroj {
  nazev?: string | null;
  url?: string | null;
}

export type TSmlouvaCiziMena = object;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title HlidacStatu Api 2.2.1.0
 * @version v2
 * @license CC BY 3.0 CZ (https://www.hlidacstatu.cz/texty/licence/)
 * @termsOfService https://www.hlidacstatu.cz/texty/provoznipodminky/
 * @contact Hlídač státu <podpora@hlidacstatu.cz> (https://www.hlidacstatu.cz/texty/kontakt/)
 *
 * REST API Hlídače státu
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags ApiV2
     * @name V2PingDetail
     * @request GET:/api/v2/ping/{text}
     * @secure
     */
    v2PingDetail: (text: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/v2/ping/${text}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2
     * @name V2GetexceptionList
     * @request GET:/api/v2/getexception
     * @secure
     */
    v2GetexceptionList: (
      query?: {
        exceptionText?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, any>({
        path: `/api/v2/getexception`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2
     * @name V2GetmyipList
     * @request GET:/api/v2/getmyip
     * @secure
     */
    v2GetmyipList: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/v2/getmyip`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2
     * @name V2DumpsList
     * @request GET:/api/v2/dumps
     * @secure
     */
    v2DumpsList: (params: RequestParams = {}) =>
      this.request<DumpInfoModel[], any>({
        path: `/api/v2/dumps`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2
     * @name V2DumpDetail
     * @request GET:/api/v2/dump/{datatype}
     * @secure
     */
    v2DumpDetail: (datatype: string, params: RequestParams = {}) =>
      this.request<HttpResponseMessage, any>({
        path: `/api/v2/dump/${datatype}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2
     * @name V2DumpDetail2
     * @request GET:/api/v2/dump/{datatype}/{date}
     * @originalName v2DumpDetail
     * @duplicate
     * @secure
     */
    v2DumpDetail2: (datatype: string, date: string, params: RequestParams = {}) =>
      this.request<HttpResponseMessage, any>({
        path: `/api/v2/dump/${datatype}/${date}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Datasety
     * @name V2DatasetyList
     * @summary Načte seznam datasetů
     * @request GET:/api/v2/datasety
     * @secure
     */
    v2DatasetyList: (params: RequestParams = {}) =>
      this.request<RegistrationSearchResultDTO, any>({
        path: `/api/v2/datasety`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Ukázkový požadavek: https://raw.githubusercontent.com/HlidacStatu/API/master/v2/create_dataset.example.json
     *
     * @tags ApiV2Datasety
     * @name V2DatasetyCreate
     * @summary Vytvoří nový dataset
     * @request POST:/api/v2/datasety
     * @secure
     */
    v2DatasetyCreate: (data: Registration, params: RequestParams = {}) =>
      this.request<DSCreatedDTO, void>({
        path: `/api/v2/datasety`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Není možné změnit hodnoty jsonSchema a datasetId. Pokud je potřebuješ změnit, musíš datovou sadu smazat a zaregistrovat znovu. Ukázkový požadavek: https://raw.githubusercontent.com/HlidacStatu/API/master/v2/create_dataset.example.json
     *
     * @tags ApiV2Datasety
     * @name V2DatasetyUpdate
     * @summary Update datasetu.
     * @request PUT:/api/v2/datasety
     * @secure
     */
    v2DatasetyUpdate: (data: Registration, params: RequestParams = {}) =>
      this.request<Registration, any>({
        path: `/api/v2/datasety`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Datasety
     * @name V2DatasetyDetail
     * @summary Detail konkrétního datasetu
     * @request GET:/api/v2/datasety/{datasetId}
     * @secure
     */
    v2DatasetyDetail: (datasetId: string, params: RequestParams = {}) =>
      this.request<Registration, any>({
        path: `/api/v2/datasety/${datasetId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Datasety
     * @name V2DatasetyDelete
     * @summary Smazání datasetu
     * @request DELETE:/api/v2/datasety/{datasetId}
     * @secure
     */
    v2DatasetyDelete: (datasetId: string, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/api/v2/datasety/${datasetId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Datasety
     * @name V2DatasetyHledatDetail
     * @summary Vyhledávání v položkách datasetu
     * @request GET:/api/v2/datasety/{datasetId}/hledat
     * @secure
     */
    v2DatasetyHledatDetail: (
      datasetId: string,
      query?: {
        /** Hledaný výraz */
        dotaz?: string;
        /**
         * Stránkování
         * @format int32
         */
        strana?: number;
        /** Název pole pro řazení */
        sort?: string;
        /**
         * Řazení: 0 - Vzestupně; 1 - Sestupně
         * @default "0"
         */
        desc?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ObjectSearchResultDTO, any>({
        path: `/api/v2/datasety/${datasetId}/hledat`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Datasety
     * @name V2DatasetyZaznamyDetail
     * @summary Detail konkrétní položky z datasetu
     * @request GET:/api/v2/datasety/{datasetId}/zaznamy/{itemId}
     * @secure
     */
    v2DatasetyZaznamyDetail: (datasetId: string, itemId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v2/datasety/${datasetId}/zaznamy/${itemId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Datasety
     * @name V2DatasetyZaznamyCreate
     * @summary Vloží nebo updatuje záznam v datasetu
     * @request POST:/api/v2/datasety/{datasetId}/zaznamy/{itemId}
     * @secure
     */
    v2DatasetyZaznamyCreate: (
      datasetId: string,
      itemId: string,
      data: any,
      query?: {
        /**
         * "skip" (default) - pokud záznam existuje, nic se na něm nezmění.
         *             "merge" - snaží se spojit data z obou záznamů.
         *             "rewrite" - pokud záznam existuje, je bez milosti přepsán
         * @default ""
         */
        mode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DSItemResponseDTO, any>({
        path: `/api/v2/datasety/${datasetId}/zaznamy/${itemId}`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Pokud záznamy s daným ID existují, tak budou přepsány. Ukázkový požadavek: [ { "HsProcessType": "person", "Id": "2", "jmeno": "Ferda", "prijmeni": "Mravenec", "narozeni": "2018-11-13T20:20:39+00:00" }, { "HsProcessType": "document", "Id": "broukpytlik", "jmeno": "Brouk", "prijmeni": "Pytlík", "narozeni": "2017-12-10T00:00:00+00:00", "DocumentUrl": "www.hlidacstatu.cz", "DocumentPlainText": null } ]
     *
     * @tags ApiV2Datasety
     * @name V2DatasetyZaznamyCreate2
     * @summary Hromadné vkládání záznamů
     * @request POST:/api/v2/datasety/{datasetId}/zaznamy
     * @originalName v2DatasetyZaznamyCreate
     * @duplicate
     * @secure
     */
    v2DatasetyZaznamyCreate2: (datasetId: string, data: any, params: RequestParams = {}) =>
      this.request<DSItemResponseDTO[], any>({
        path: `/api/v2/datasety/${datasetId}/zaznamy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Datasety
     * @name V2DatasetyZaznamyExistujeDetail
     * @summary Kontrola, jestli záznam existuje v datasetu
     * @request GET:/api/v2/datasety/{datasetId}/zaznamy/{itemId}/existuje
     * @secure
     */
    v2DatasetyZaznamyExistujeDetail: (datasetId: string, itemId: string, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/api/v2/datasety/${datasetId}/zaznamy/${itemId}/existuje`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Dotace
     * @name V2DotaceHledatList
     * @summary Vyhledá dotace
     * @request GET:/api/v2/dotace/hledat
     * @secure
     */
    v2DotaceHledatList: (
      query?: {
        /** fulltext dotaz dle <a href="https://www.hlidacstatu.cz/napoveda">syntaxe</a> */
        dotaz?: string;
        /**
         * stránka, max. hodnota je 250
         * @format int32
         */
        strana?: number;
        /**
         * pořadí výsledků:<br />
         * 0 Řadit podle relevance
         * 1 Řadit podle data podpisu od nejnovějších
         * 2 Řadit podle data podpisu od nejstarších
         * 3 Řadit podle částky od největší
         * 4 Řadit podle částky od nejmenší
         * 5 Řadit podle IČO od největšího
         * 6 Řadit podle IČO od nejmenšího
         * @format int32
         */
        razeni?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<DotaceSearchResultDTO, any>({
        path: `/api/v2/dotace/hledat`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Dotace
     * @name V2DotaceDetail
     * @summary Vrátí detail jedné dotace.
     * @request GET:/api/v2/dotace/{id}
     * @secure
     */
    v2DotaceDetail: (id: string, params: RequestParams = {}) =>
      this.request<Dotace, any>({
        path: `/api/v2/dotace/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Firmy
     * @name V2FirmyIcoDetail
     * @summary Vyhledá firmu v databázi Hlídače státu.
     * @request GET:/api/v2/firmy/ico/{ico}
     * @secure
     */
    v2FirmyIcoDetail: (ico: string, params: RequestParams = {}) =>
      this.request<FirmaDTO, any>({
        path: `/api/v2/firmy/ico/${ico}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Firmy
     * @name V2FirmyDetail
     * @summary Vyhledá firmu v databázi Hlídače státu.
     * @request GET:/api/v2/firmy/{jmenoFirmy}
     * @secure
     */
    v2FirmyDetail: (jmenoFirmy: string, params: RequestParams = {}) =>
      this.request<FirmaDTO, any>({
        path: `/api/v2/firmy/${jmenoFirmy}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Firmy
     * @name V2FirmySocialList
     * @request GET:/api/v2/firmy/social
     * @secure
     */
    v2FirmySocialList: (
      query?: {
        typ?: SocialNetwork[];
      },
      params: RequestParams = {},
    ) =>
      this.request<FirmaSocialDTO[], any>({
        path: `/api/v2/firmy/social`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Toto API je pouze pro držitele komerční licence. Kontaktujte nás na api@hlidacstatu.cz.
     *
     * @tags ApiV2Insolvence
     * @name V2InsolvenceHledatList
     * @summary Vyhledá smlouvy v databázi smluv
     * @request GET:/api/v2/insolvence/hledat
     * @secure
     */
    v2InsolvenceHledatList: (
      query?: {
        /** fulltext dotaz dle <a href="https://www.hlidacstatu.cz/napoveda">syntaxe</a> */
        dotaz?: string;
        /**
         * stránka, max. hodnota je 250
         * @format int32
         */
        strana?: number;
        /**
         * pořadí výsledků:<br />
         * 0: podle relevance<br />
         * 1: nově zahájené první
         * 2: nově zveřejněné poslední
         * 3: naposled změněné první
         * 4: naposled změněné poslední
         * @format int32
         */
        razeni?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RizeniSearchResultDTO, any>({
        path: `/api/v2/insolvence/hledat`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Toto API je pouze pro držitele komerční licence. Kontaktujte nás na api@hlidacstatu.cz.
     *
     * @tags ApiV2Insolvence
     * @name V2InsolvenceDetail
     * @summary Vrátí detail jedné smlouvy.
     * @request GET:/api/v2/insolvence/{id}
     * @secure
     */
    v2InsolvenceDetail: (id: string, params: RequestParams = {}) =>
      this.request<Rizeni, any>({
        path: `/api/v2/insolvence/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Osoby
     * @name V2OsobyDetail
     * @summary Vypíše detail osoby na základě "osobaId" parametru.
     * @request GET:/api/v2/osoby/{osobaId}
     * @secure
     */
    v2OsobyDetail: (osobaId: string, params: RequestParams = {}) =>
      this.request<OsobaDetailDTO, any>({
        path: `/api/v2/osoby/${osobaId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Osoby
     * @name V2OsobyHledatFtxList
     * @summary Vyhledání osoby podle jména v textu
     * @request GET:/api/v2/osoby/hledatFtx
     * @secure
     */
    v2OsobyHledatFtxList: (
      query?: {
        /** Jméno osoby */
        ftxDotaz?: string;
        /**
         * 0 - nepolitická osoba (dostupné pouze pro uživatele s komerční licencí)
         * 1 - sponzoři polit.stran, politici, úředníci
         * @format int32
         * @default 1
         */
        status?: number;
        /** @format int32 */
        strana?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<OsobaDTO[], any>({
        path: `/api/v2/osoby/hledatFtx`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Osoby
     * @name V2OsobyHledatList
     * @request GET:/api/v2/osoby/hledat
     * @secure
     */
    v2OsobyHledatList: (
      query?: {
        jmeno?: string;
        prijmeni?: string;
        datumNarozeni?: string;
        /** @default false */
        ignoreDiakritiku?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<OsobaDTO[], any>({
        path: `/api/v2/osoby/hledat`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Osoby
     * @name V2OsobySocialList
     * @request GET:/api/v2/osoby/social
     * @secure
     */
    v2OsobySocialList: (
      query?: {
        /**
         * Twitter = 0,
         * Facebook_page = 1,
         * Facebook_profile = 2,
         * Instagram = 3,
         * WWW =4,
         * Youtube = 5,
         * Zaznam_zastupitelstva = 6
         */
        typ?: SocialNetwork[];
      },
      params: RequestParams = {},
    ) =>
      this.request<OsobaSocialDTO[], any>({
        path: `/api/v2/osoby/social`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Smlouvy
     * @name V2SmlouvyHledatList
     * @summary Vyhledá smlouvy v databázi smluv
     * @request GET:/api/v2/smlouvy/hledat
     * @secure
     */
    v2SmlouvyHledatList: (
      query?: {
        /** fulltext dotaz dle <a href="https://www.hlidacstatu.cz/napoveda">syntaxe</a> */
        dotaz?: string;
        /**
         * stránka, max. hodnota je 250
         * @format int32
         */
        strana?: number;
        /**
         * pořadí výsledků:<br />
         * 0: podle relevance<br />
         * 1: nově zveřejněné první<br />
         * 2: nově zveřejněné poslední<br />
         * 3: nejlevnější první<br />
         * 4: nejdražší první<br />
         * 5: nově uzavřené první<br />
         * 6: nově uzavřené poslední<br />
         * 7: nejvíce chybové první<br />
         * 8: podle odběratele<br />
         * 9: podle dodavatele<br />
         * @format int32
         */
        razeni?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SmlouvaSearchResultDTO, any>({
        path: `/api/v2/smlouvy/hledat`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Smlouvy
     * @name V2SmlouvyDetail
     * @summary Vrátí detail jedné smlouvy.
     * @request GET:/api/v2/smlouvy/{id}
     * @secure
     */
    v2SmlouvyDetail: (id: string, params: RequestParams = {}) =>
      this.request<Smlouva, any>({
        path: `/api/v2/smlouvy/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Smlouvy
     * @name V2SmlouvyVsechnaIdList
     * @summary všechna ID platných verzí smluv. (API pouze pro komerční licence)
     * @request GET:/api/v2/smlouvy/vsechnaID
     * @secure
     */
    v2SmlouvyVsechnaIdList: (params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/v2/smlouvy/vsechnaID`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Smlouvy
     * @name V2SmlouvyTextDetail
     * @request GET:/api/v2/smlouvy/text/{id}
     * @secure
     */
    v2SmlouvyTextDetail: (
      id: string,
      query?: {
        /** @format int32 */
        addPredmet?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<string[], any>({
        path: `/api/v2/smlouvy/text/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Smlouvy
     * @name V2SmlouvyPredmetDetail
     * @request GET:/api/v2/smlouvy/predmet/{id}
     * @secure
     */
    v2SmlouvyPredmetDetail: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/v2/smlouvy/predmet/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Sponzoring
     * @name V2SponzoringDetail
     * @summary Vypíše seznam darů obdržených politickou stranou.
     * @request GET:/api/v2/sponzoring/{icoPrijemce}
     * @secure
     */
    v2SponzoringDetail: (icoPrijemce: string, params: RequestParams = {}) =>
      this.request<SponzoringDetail[], any>({
        path: `/api/v2/sponzoring/${icoPrijemce}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Toto API je pouze pro držitele komerční licence. Kontaktujte nás na api@hlidacstatu.cz.
     *
     * @tags ApiV2VZ
     * @name V2VerejnezakazkyDetail
     * @summary Detail veřejné zakázky
     * @request GET:/api/v2/verejnezakazky/{id}
     * @secure
     */
    v2VerejnezakazkyDetail: (id: string, params: RequestParams = {}) =>
      this.request<VerejnaZakazka, any>({
        path: `/api/v2/verejnezakazky/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Toto API je pouze pro držitele komerční licence. Kontaktujte nás na api@hlidacstatu.cz.
     *
     * @tags ApiV2VZ
     * @name V2VerejnezakazkyHledatList
     * @summary Vyhledá veřejné zakázky v databázi Hlídače smluv
     * @request GET:/api/v2/verejnezakazky/hledat
     * @secure
     */
    v2VerejnezakazkyHledatList: (
      query?: {
        /** fulltext dotaz dle <a href="https://www.hlidacstatu.cz/napoveda">syntaxe</a> */
        dotaz?: string;
        /**
         * stránka, max. hodnota je 250
         * @format int32
         */
        strana?: number;
        /**
         * pořadí výsledků: <br />
         * 0: podle relevance<br />
         * 1: nově zveřejněné první<br />
         * 2: nově zveřejněné poslední<br />
         * 3: nejlevnější první<br />
         * 4: nejdražší první<br />
         * 5: nově uzavřené první<br />
         * 6: nově uzavřené poslední<br />
         * 8: podle odběratele<br />
         * 9: podle dodavatele<br />
         * @format int32
         */
        razeni?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<VerejnaZakazkaSearchResultDTO, any>({
        path: `/api/v2/verejnezakazky/hledat`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Weby
     * @name V2WebyList
     * @request GET:/api/v2/Weby
     * @secure
     */
    v2WebyList: (params: RequestParams = {}) =>
      this.request<UptimeServer[], any>({
        path: `/api/v2/Weby`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Weby
     * @name V2WebyDomenyList
     * @request GET:/api/v2/Weby/domeny
     * @secure
     */
    v2WebyDomenyList: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/v2/Weby/domeny`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Weby
     * @name V2WebyNedostupnostList
     * @request GET:/api/v2/Weby/nedostupnost
     * @secure
     */
    v2WebyNedostupnostList: (
      query?: {
        /** @format int32 */
        days?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<NedostupnostModel[], any>({
        path: `/api/v2/Weby/nedostupnost`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiV2Weby
     * @name V2WebyDetail
     * @request GET:/api/v2/Weby/{id}
     * @secure
     */
    v2WebyDetail: (
      id: number,
      query?: {
        /**
         * @format int32
         * @default 1
         */
        days?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<WebStatusExport, any>({
        path: `/api/v2/Weby/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
