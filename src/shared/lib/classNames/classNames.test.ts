import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
  test('With first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('With additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2')
  })

  test('With first param', () => {
    expect(classNames('someClass', { disabled: true, hovered: true }, ['additional'])).toBe('someClass additional disabled hovered')
  })

  test('With first param', () => {
    expect(classNames('someClass', { disabled: false, hovered: true }, ['additional'])).toBe('someClass additional hovered')
  })
})
