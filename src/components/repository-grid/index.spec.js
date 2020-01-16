import React from 'react';
import RepositoryGrid from './index';

describe('RepositoryGrid', () => {
  let props, wrapper, spyRenderGroup;

  before(async () => {

    props = {
      repositories: [
        {
          start: 2020,
          end: 2020,
          data: {
            items: [{
              name: 'repo1',
              name: 'repo2',
              name: 'repo3',
              name: 'repo4'
            }]
          }
        }
      ],
      dateJump: 'week'
    }

    spyRenderGroup = sinon.spy(RepositoryGrid.prototype, 'renderGroup')
    wrapper = shallow(<RepositoryGrid {...props} />)

  }
  )

  it('Renders div with repos', () => {
    const div = wrapper.find('div').at(0).hasClass('repositories-grid')
    sinon.assert.calledOnce(spyRenderGroup)
    expect(spyRenderGroup.callCount).to.equal(props.repositories.length)


  })


})