-- KubeJS / ProbeJS workspace config
-- Loaded automatically by Neovim when exrc is enabled (vim.opt.exrc = true)
-- This file lives in devRad/kubejs/ and configures ts_ls for KubeJS development.

-- Override ts_ls settings for this workspace (higher memory for large KubeJS type stubs)
vim.lsp.config["ts_ls"] = vim.tbl_deep_extend("force", vim.lsp.config["ts_ls"] or {}, {
	init_options = {
		maxTsServerMemory = 8192,
	},
	settings = {
		typescript = {
			preferences = {
				importModuleSpecifier = "relative",
			},
		},
		javascript = {
			preferences = {
				importModuleSpecifier = "relative",
			},
		},
	},
})

-- Hint: run `:ProbeJS` in-game to regenerate probe/generated type stubs,
-- then `:LspRestart ts_ls` in Neovim to pick up the latest types.
