import { withInstall, WithInstallType } from '../shared';
import Link from './link.vue';

import './style';
import { TdLinkProps } from './type';

export * from './type';
export type LinkProps = TdLinkProps;

const _Link: WithInstallType<typeof Link> = withInstall(Link);
export default _Link;
