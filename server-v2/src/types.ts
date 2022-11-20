export enum UserRole {
  ADMIN = 'admin',
  VISITOR = 'visitor',
  CLERK = 'clerk',
  CLERK_MANAGEMENT = 'clerk_management',
}

export enum ChatMessageType {
  VIDEO = 'video_url',
  IMAGE = 'image_url',
  TEXT = 'text',
  SYSTEM_TEXT = 'system',
  PDF = 'pdf',
  OTHERS = 'others',
}

export enum EventType {
  NORTH_JAPAN = 'North Japan',
  TOKYO_CENTRAL = 'Tokyo Central',
  TOKYO_WEST = 'Tokyo West',
  NAGOYA = 'Nagoya',
  OSAKA = 'Osaka',
  KYOTO = 'kyoto',
  SETOUCHI = 'Setouchi',
  FUKUOKA = 'Fukuoka',
  TOKYO_PLATINUM = 'Tokyo Platinum',
}

export enum UserListType {
  NORTH_JAPAN = 'North Japan',
  TOKYO_CENTRAL = 'Tokyo Central',
  TOKYO_WEST = 'Tokyo West',
  NAGOYA = 'Nagoya',
  OSAKA = 'Osaka',
  KYOTO = 'Kyoto',
  SETOUCHI = 'Setouchi',
  FUKUOKA = 'Fukuoka',
  TOKYO_PLATINUM = 'Tokyo Platinum',
  ALL = 'All',
  HOKKAIDO = 'Hokkaido',
  HOKURIKU = 'Hokuriku',
  OKINAWA = 'Okinawa',
  JKBC = 'JKBC',
  AllJAPAN = 'All Japan',
}

export enum AnswerType {
  ATTENDANCE = 'attendance',
  ABSENCE = 'absence',
  ONHOLD = 'on_hold',
}

export enum RuleCategory {
  //会社理念
  PHILOSOPHY = 'philosophy',
  //社内規則
  RULES = 'rules',
  //ABC制度
  ABC = 'abc',
  //福利厚生等
  BENEFITS = 'benefits',
  //各種申請書
  DOCUMENT = 'document',
  OTHERS = '',
}

export type TextFormat = 'markdown' | 'html';

export interface User {
  id: string;
  email: string;
  lastName: string;
  firstName: string;
  password: string;
  description: string;
  birthday: null | Date;
  tel: string;
  avatarUrl: string;
  role: string;
  status: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  token: string;
  lastNameKana: string;
  firstNameKana: string;
  facebookUrl?: string;
  company?: Company;
  eventSchedule?: UserEventSchedule[];
  userGoodForTimeline?: Timeline[];
  meetups?: Meetup[];
  userMeetupDateTimeChoice?: UserMeetupDateTimeChoice;
  chapter?: Chapter;
  deviceToken?: string;
  isRequestUser?: boolean;
  subChapter?: Chapter[];
  isHiddenEmailAndTel?: boolean;
  user: User;
  isHiddenEmail?: boolean;
  isHiddenTel?: boolean;
  targetEventAttendStatus?: UserEventSchedule;
  targetEventPaymentFlag?: boolean;
}
export interface Chapter {
  id: number;
  name: string;
  users?: User[];
  news?: News[];
}

export interface Timeline {
  id: number;
  content: string;
  deleteFlag: boolean;
  sender: User;
  userGoodForTimeline?: User[];
  isGoodSender?: boolean;
  isSender?: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}
export interface Company {
  id: number;
  name: string;
  foundingDateTime: Date | null;
  address: string;
  capital: string;
  tel: string;
  industry: string;
  employee: string;
  listed: string;
  overseas: string;
  introduceProduct: string;
  introduceCompany: string;
  zipCode: string;
  history: string;
  philosophy: string;
  homepageUrl: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  isRequestUser?: boolean;
}

export interface ChatGroup {
  id: number;
  name: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  users: User[];
  roomType: RoomType;
  message: Message[];
  isExist?: boolean;
  latestMessage?: Message;
  isPinned?: boolean;
  memberCount: number;
  unreadCount?: number;
}

export type RoomType = 'talk_room' | 'chat_group' | 'personal';

export interface Message {
  id: number;
  type: 'image_url' | 'video_url' | 'text' | 'system' | 'others' | 'pdf';
  videoImage?: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  chatGroup?: ChatGroup;
  sender: User;
  viewers?: User[];
  readUsers?: User[];
  isSender?: boolean;
  groupId?: number;
}
export interface EventSchedule {
  id: number;
  title: string;
  description: string;
  speaker: string;
  imageUrl: string;
  startAt: Date;
  endAt: Date;
  videos?: Partial<EventVideo>[];
  files?: Partial<EventFile>[];
  createdAt: Date;
  updatedAt: Date;
  userEventSchedule?: UserEventSchedule[];
  eventImage?: EventImage[];
  eventImpressions?: EventImpression[];
  eventFeePaymentStatus: EventFeePaymentStatus[];
  chapters?: Chapter[];
  isAuthor?: boolean;
  participationFee?: string;
  settlementUrl?: string;
  stripeProductID?: string;
  stripePriceID?: string;
  user?: User;
  impressionCounts?: number;
  myAttendFlag?: 'attendance' | 'absence' | 'on_hold';
}

export interface EventVideo {
  id: number;
  url: string;
  eventSchedule?: EventSchedule;
  createdAt: Date;
  updatedAt: Date;
}

export interface EventFile {
  id: number;
  url: string;
  eventSchedule?: EventSchedule;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserEventSchedule {
  id: number;
  attendFlag: Answer;
  user?: User;
  eventSchedule?: EventSchedule;
}

export interface Meetup {
  id: number;
  title: string;
  description: string;
  chatGroup: ChatGroup;
  author: User;
  deadline: Date;
  createdAt: Date;
  updatedAt: Date;
  meetupDateTimeChoices?: MeetupDateTimeChoice[];
  isAnsweredOnRequestUser?: boolean;
}

export type Answer = 'attendance' | 'absence' | 'on_hold';

export type MeetupStatusChoices = 'possible' | 'case-by-case' | 'impossible';

export interface MeetupDateTimeChoice {
  id?: number;
  startTime: Date;
  endTime: Date;
  userMeetupDateTimeChoices?: UserMeetupDateTimeChoice[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserMeetupDateTimeChoice {
  id?: number;
  user: User;
  meetupDateTimeChoice: MeetupDateTimeChoice;
  status: MeetupStatusChoices;
}

export interface EventImage {
  id?: number;
  imageUrl: string;
  eventSchedule: EventSchedule;
  user?: User;
}

export interface EventImpression {
  id?: number;
  text: string;
  eventSchedule: EventSchedule;
  user?: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface RegisteringUser extends User {
  confirmingPassword: string;
  privateKey: '';
}

export interface Timeline {
  id: number;
  content: string;
  deleteFlag: boolean;
  sender: User;
  userGoodForTimeline?: User[];
  isGoodSender?: boolean;
  isSender?: boolean;
  goodCount?: number;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface LastReadChatTime {
  id: number;
  readTime: Date;
  chatGroup: ChatGroup;
  user: User;
}

export interface News {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
  deleteFlag: boolean;
  chapters?: Chapter[];
  createdAt: Date;
  updatedAt: Date;
  publishAt: Date;
}

export interface Footprint {
  id: number;
  user: User;
  viewer: User;
  content: 'profile' | 'company';
  createdAt: Date;
  updatedAt: Date;
}

export interface EventFeePaymentStatus {
  id: number;
  paymentFlag: boolean;
  user?: User;
  eventSchedule?: EventSchedule;
  createdAt: Date;
  updatedAt: Date;
}

export interface LastReadChatTime {
  id: number;
  readTime: Date;
  user: User;
  chatGroup: ChatGroup;
}

export interface CalendarEvent {
  id?: number;
  createdAt?: Date;
  description?: string;
  chapters?: ChapterColor[];
  end?: Date;
  endAt?: Date;
  files?: Partial<EventFile>[];
  imageUrl?: string;
  isAuthor?: boolean;
  isHiddone?: boolean;
  speaker?: string;
  start?: Date;
  startAt?: Date;
  stripePriceID?: string;
  stripProductID?: string;
  title?: string;
  updateAt?: Date;
  user?: User[];
  userEventSchedule?: UserEventSchedule[];
  videos?: Partial<EventVideo>[];
}
export interface ChapterColor {
  id: number;
  name: string;
  order: number;
}
