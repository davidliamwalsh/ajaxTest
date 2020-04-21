import MainJS from '../src/script/main-js'

describe('<MainJS />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <MainJS />
    )

    expect(component).toMatchSnapshot()
  })
}) 