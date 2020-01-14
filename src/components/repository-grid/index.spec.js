import React from 'react';
import RepositoryGrid from './index';
var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

describe('RepositoryGrid', () => {
  let props, wrapper, repos;

  before(async () => {
    var mock = new MockAdapter(axios);

    mock.onGet('/').reply(200, {
      repositories: [
        {
          start: 1,
          end: 2,
          data: {
            items: [{
              name: 'repo1',
              name: 'repo2',
              name: 'repo3',
              name: 'repo4'
            }]
          }
        }
      ]
    });

    repos = await axios.get('/')
      .then(function (response) {
        return response.data.repositories;
      })


    props = {
      repositories: repos,
      dateJump: 'week'
    }

    wrapper = shallow(<RepositoryGrid {...props} />)

    return {
      props,
      wrapper
    }
  }
  )

  // it('Renders', () => {
  //   const fakeRenderGroup = sinon.fake()
  //   const div = wrapper.find('div').at(0).hasClass('repositories-grid')

  //   sinon.assert.calledOnce(fakeRenderGroup)

  //   // sinon.assert.calledWith(fakeRenderGroup, 'grid')
  // })

})