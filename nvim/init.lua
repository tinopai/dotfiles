require("config.lazy")
require("config.lsp")

vim.wo.relativenumber = true
vim.o.ignorecase = true
-- Theme
-- vim.cmd("colorscheme rose-pine")
vim.cmd("colorscheme oxocarbon")
-- Import the necessary modules
local wk = require("which-key")
local nvim_tree = require("nvim-tree")

vim.g.mapleader = " "

-- Define your keybindings
wk.add({
	{ "<leader>tt", "<cmd>NvimTreeToggle<cr>", desc = "Toggle NvimTree" },
	{ "<leader>tf", "<cmd>NvimTreeFocus<cr>", desc = "Focus NvimTree" },
	{ "<leader>ts", "<cmd>SupermavenToggle<cr>", desc = "Toggle Supermaven" },
	{ "<leader>b4", "<cmd>b#<cr>", desc = "Jump to previous buffer" },
	-- Use Ctrl+h to navigate to left panel
	{ "<C-h>", "<cmd>wincmd h<cr>", desc = "Navigate to left panel" },
	{ "<C-l>", "<cmd>wincmd l<cr>", desc = "Navigate to right panel" },
	{ "<C-k>", "<cmd>wincmd k<cr>", desc = "Navigate to upper panel" },
	{ "<C-j>", "<cmd>wincmd j<cr>", desc = "Navigate to lower panel" },
	-- Telescope
	{ "<leader>ff", "<cmd>Telescope find_files<cr>", desc = "Find files" },
	{ "<leader>fg", "<cmd>Telescope live_grep<cr>", desc = "Find text" },
})

