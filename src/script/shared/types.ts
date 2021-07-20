// Examples from https://github.com/PostHog/posthog.com/blob/master/src/types.ts

export interface IPageData {
  section: string;
}
export interface FeaturesPageData {
  key: string;
  title: string;
  href: string;
  icon: string;
}

export interface FeatureComparisonData {
  title: string;
  posthog: boolean;
  amplitude: boolean;
  mixpanel: boolean;
  heap: boolean;
}

export interface LibraryPluginType {
  id: number;
  name: string;
  description?: string;
  url: string;
  imageLink: string;
  maintainer?: string;
}

export interface MenuProps {
  blogArticleSlug?: string;
  isHomePage?: boolean;
  activeKey: string;
}

export interface MenuQueryNodeType {
  node: {
    name: string;
    link: string;
    a: string;
  };
}

export interface MenuQueryType {
  allMenuItemsJson: {
    edges: MenuQueryNodeType[];
  };
}

export interface Contributor {
  login: string;
  name: string;
  avatar_url: string;
  profile: string;
  contributions: string[];
  level: number;
  mvpWins: number;
}

export interface AuthorsData {
  handle: string;
  image: string;
  link_type: 'twitter' | 'linkedin';
  link_url: string;
  name: string;
  role: string;
}
