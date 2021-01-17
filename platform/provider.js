fin.Platform.init({
  overrideCallback: async (Provider) => {
    class Override extends Provider {
      async getSnapshot() {
        const snapshot = await super.getSnapshot();
        // add custom logic to shape the snapshot here
        return {
          ...snapshot
        };
      }

      async applySnapshot({ snapshot, options }) {
        // do any additional logic based on the customised snapshot here (if you chose to customise it)
        const originalPromise = super.applySnapshot({ snapshot, options });

        return originalPromise;
      }
    }
    return new Override();
  }
});
