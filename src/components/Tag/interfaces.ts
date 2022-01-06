export type TagProps = {
  label: string;
  size: 'small' | 'medium';
  icon?: string;
  color?: Exclude<Custom.Colors, 'black' | 'white'>;
};
