export type NavbarAction = {
  icon?: string
  label?: string
  url?: string
  cb?: (payload: MouseEvent) => void
}

export type MenuItem = {
  icon?: string
  label?: string
  url?: string
  path?: string
  cb?: (payload: MouseEvent) => void
}

export enum navOrientation {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export type navOrientationType = 'horizontal' | 'vertical'
