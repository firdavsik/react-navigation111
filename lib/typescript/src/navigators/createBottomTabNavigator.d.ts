import { DefaultNavigatorOptions, ParamListBase, TabNavigationState, TabRouterOptions } from '@react-navigation/native';
import type { BottomTabNavigationConfig, BottomTabNavigationEventMap, BottomTabNavigationOptions } from '../types';
type Props = DefaultNavigatorOptions<ParamListBase, TabNavigationState<ParamListBase>, BottomTabNavigationOptions, BottomTabNavigationEventMap> & TabRouterOptions & BottomTabNavigationConfig;
declare function BottomTabNavigator({ id, initialRouteName, backBehavior, children, screenListeners, screenOptions, sceneContainerStyle, ...rest }: Props): JSX.Element;
export declare const createBottomTabNavigator: {
    <ParamList extends ParamListBase>(): import("@react-navigation/native").TypedNavigator<ParamList, TabNavigationState<ParamListBase>, BottomTabNavigationOptions, BottomTabNavigationEventMap, typeof BottomTabNavigator>;
    <ParamList_1 extends ParamListBase, Config extends import("packages/core/lib/typescript/src/StaticNavigation").StaticConfig<ParamList_1, TabNavigationState<ParamListBase>, BottomTabNavigationOptions, BottomTabNavigationEventMap, typeof BottomTabNavigator>>(config: Config): import("@react-navigation/native").TypedNavigator<ParamList_1, TabNavigationState<ParamListBase>, BottomTabNavigationOptions, BottomTabNavigationEventMap, typeof BottomTabNavigator> & {
        config: Config;
    };
};
export {};
//# sourceMappingURL=createBottomTabNavigator.d.ts.map