import { ConfigurableModuleBuilder } from '@nestjs/common';
import { AgendaConfig } from 'agenda';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<AgendaConfig>().build();
