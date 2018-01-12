const integrations = `
  query integrations($channelId: String, $perPage: Int) {
    integrations(channelId: $channelId, perPage: $perPage) {
      _id
      name
      kind
      brand {
        _id
        name
      }
      channels {
        _id
        name
      }
    }
  }
`;

const channelDetail = `
  query channelDetail($_id: String!) {
    channelDetail(_id: $_id) {
      _id
      name
      integrationIds
      memberIds
    }
  }
`;

const channels = `
  query channels($page: Int, $perPage: Int, $memberIds: [String]) {
    channels(page: $page, perPage: $perPage, memberIds: $memberIds) {
      _id
      name
      description
      integrationIds
      memberIds
    }
  }
`;

const users = `
  query users {
    users {
      _id
      details {
        avatar
        fullName
        position
        twitterUsername
      }
    }
  }
`;

const count = `
  query totalChannelsCount {
    channelsTotalCount
  }
`;

export default {
  users,
  channels,
  integrations,
  channelDetail,
  count
};
