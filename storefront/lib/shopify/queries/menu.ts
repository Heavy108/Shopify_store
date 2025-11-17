export const getMenuQuery = `query getMenu($handle: String!) {
    menu(handle: $handle) {
      item {
      title
      url
      }
    }
}
    `;