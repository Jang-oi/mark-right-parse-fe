export const NAME_TEMPLATES = [
  { id: 1, option: '1', name: '네임스티커_01스마일' },
  { id: 2, option: '2', name: '네임스티커_02파스텔' },
  { id: 3, option: '3', name: '네임스티커_03레인보우' },
  { id: 4, option: '4', name: '네임스티커_04플라워' },
  { id: 5, option: '5', name: '네임스티커_05하트' },
  { id: 6, option: '6', name: '네임스티커_06스타' },
  { id: 7, option: '7', name: '네임스티커_07심플한글네임' },
  { id: 8, option: '8', name: '네임스티커_08심플영문네임' },
  { id: 9, option: '9', name: '네임스티커_09심플학교' },
];

export const DOG_TEMPLATES = [{ id: 1, option: '01', name: '강아지스티커_01포메라니안' }];

export const getVariantType = (variantValue: string) => {
  let MAX_TEMPLATES = 0,
    INIT_VARIANT_TYPE = '',
    VARIANT_TYPE_TEXT = '';

  if (variantValue === '베이직' || variantValue === 'basic') {
    MAX_TEMPLATES = 5;
    INIT_VARIANT_TYPE = '1';
    VARIANT_TYPE_TEXT = '베이직';
  } else if (variantValue === '대용량' || variantValue === 'extra') {
    MAX_TEMPLATES = 2;
    INIT_VARIANT_TYPE = '2';
    VARIANT_TYPE_TEXT = '대용량';
  } else if (variantValue === '강아지' || variantValue === 'dog') {
    MAX_TEMPLATES = 10;
    INIT_VARIANT_TYPE = 'D';
    VARIANT_TYPE_TEXT = '강아지';
  }

  return { MAX_TEMPLATES, INIT_VARIANT_TYPE, VARIANT_TYPE_TEXT };
};
