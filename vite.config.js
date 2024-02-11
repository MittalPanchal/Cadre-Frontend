export default {
  build: {
    rollupOptions: {
      onwarn(warning, rollupWarn) {
        // Suppress the warning related to eval usage
        if (warning.code === 'EVAL') return;
        
        // Pass through any other warnings
        rollupWarn(warning);
      },
    },
    chunkSizeWarningLimit: 2000,
  },
};
