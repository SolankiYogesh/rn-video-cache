import { TurboModuleRegistry, type TurboModule } from 'react-native';

export interface Spec extends TurboModule {
  convert(url: string): string;
  convertAsync(url: string): Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('VideoCache');
