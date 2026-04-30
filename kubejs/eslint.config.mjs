import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["server_scripts/**/*.js", "client_scripts/**/*.js", "startup_scripts/**/*.js"],
    languageOptions: {
      ecmaVersion: 2015,
      globals: {
        // KubeJS event registries
        onEvent: "readonly",
        StartupEvents: "readonly",
        ServerEvents: "readonly",
        ClientEvents: "readonly",
        PlayerEvents: "readonly",
        ItemEvents: "readonly",
        BlockEvents: "readonly",
        EntityEvents: "readonly",
        LevelEvents: "readonly",
        WorldgenEvents: "readonly",
        NetworkEvents: "readonly",
        ForgeEvents: "readonly",
        CommonAddedEvents: "readonly",
        FTBQuestsEvents: "readonly",
        JEIEvents: "readonly",
        MoreJSEvents: "readonly",
        // KubeJS built-ins
        Java: "readonly",
        Block: "readonly",
        Item: "readonly",
        Fluid: "readonly",
        AABB: "readonly",
        Color: "readonly",
        Utils: "readonly",
        Text: "readonly",
        Component: "readonly",
        JsonIO: "readonly",
        NBT: "readonly",
        Platform: "readonly",
        Ingredient: "readonly",
        ItemFilter: "readonly",
        Facing: "readonly",
        TradeItem: "readonly",
        VillagerUtils: "readonly",
        // LootJS
        LootJS: "readonly",
        LootType: "readonly",
        LootEntry: "readonly",
        // Ponder
        Ponder: "readonly",
        PonderPalette: "readonly",
        // Curios
        CuriosJSCapabilityBuilder: "readonly",
        // Script-scoped variables
        global: "writable",
        server: "readonly",
        level: "readonly",
        item: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-unused-vars": [
        "error",
        {
          "varsIgnorePattern": "^_",
          "argsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_",
        }
      ],
      "no-undef": "warn",
      eqeqeq: "warn",
      "no-console": "off",
      "semi": ["error", "always"],
    },
  },
];
