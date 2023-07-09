import { StackContext } from 'sst/constructs'

const MAPPING: Record<string, string> = {
  dev: 'dev.5th-avegallery.com',
  develop: 'dev.5th-avegallery.com',
  prod: '5th-avegallery.com',
  production: '5th-avegallery.com',
}

export function DNS(props: StackContext) {
  const zone = MAPPING[props.app.stage] || 'dev.5th-avegallery.com'
  const domain =
    MAPPING[props.app.stage] || `${props.app.stage}.dev.5th-avegallery.com`

  return {
    zone,
    domain,
  }
}
