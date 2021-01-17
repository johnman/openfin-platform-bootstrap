export async function getSnapshot() {
  let snapshot = {
    windows: [
      {
        defaultWidth: 800,
        defaultHeight: 600,
        defaultLeft: 0,
        defaultTop: 0,
        saveWindowState: false,
        backgroundThrottling: true,
        layout: {
          content: [
            {
              type: "stack",
              width: 100,
              isClosable: true,
              reorderEnabled: true,
              title: "",
              activeItemIndex: 0,
              content: [
                {
                  type: "component",
                  componentName: "view",
                  componentState: {
                    url: "https://xfse6.csb.app/views/testview.html",
                    name: "component_placeholder1"
                  },
                  isClosable: true,
                  reorderEnabled: true,
                  title: "view"
                },
                {
                  type: "component",
                  componentName: "view",
                  componentState: {
                    url: "https://ft.com",
                    name: "component_placeholder2"
                  },
                  isClosable: true,
                  reorderEnabled: true,
                  title: "view"
                }
              ]
            }
          ]
        }
      }
    ]
  };

  return snapshot;
}
