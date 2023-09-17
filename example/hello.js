var Hello = {
  template : `
<Page>
  <h1>Hello baseweb plugin world!</h1>
</Page>
`,
  navigation: {
    icon:    "info",
    text:    "Hello",
    path:    "/",
    index:   1
  }
};

Navigation.add(Hello);
