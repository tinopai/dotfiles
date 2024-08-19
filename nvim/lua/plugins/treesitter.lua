return {
	'nvim-treesitter/nvim-treesitter',
	opts = function()
		require('nvim-treesitter.configs').setup {
			highlight = {
				enable = true,
				additional_vim_regex_highlighting = false,
			},
			ensure_installed = {'cpp','typescript','markdown'},
			indent = {
				enable = true,
			}
		}
	end,
}
