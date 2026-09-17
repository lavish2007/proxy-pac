function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    if (
        host == "claude.ai" ||
        shExpMatch(host, "*.claude.ai") ||
        shExpMatch(host, "*.anthropic.com") ||

        host == "chatgpt.com" ||
        shExpMatch(host, "*.chatgpt.com") ||
        shExpMatch(host, "*.openai.com") ||

        host == "plex.tv" ||
        shExpMatch(host, "*.plex.tv") ||

        host == "notebook.google.com" ||
        host == "notebook.google" ||
        shExpMatch(host, "*.notebooklm.google.com") ||

        host == "gemini.google.com" ||
        shExpMatch(host, "*.gemini.google.com") ||

        host == "ai.google.dev" ||
        shExpMatch(host, "*.ai.google.dev") ||

        host == "docs.google.com" ||
        shExpMatch(host, "*.docs.google.com") ||

        host == "chat.deepseek.com" ||
        shExpMatch(host, "*.chat.deepseek.com") ||
        shExpMatch(host, "*.deepseek.com") ||

        host == "notion.com" ||
        shExpMatch(host, "*.notion.com") ||
        host == "notion.so" ||
        shExpMatch(host, "*.notion.so") ||
        host == "notion.site" ||
        shExpMatch(host, "*.notion.site") ||

        host == "bafista.ru" ||
        shExpMatch(host, "*.bafista.ru") ||

        host == "domclick.ru" ||
        shExpMatch(host, "*.domclick.ru")
    ) {
        return "PROXY 185.227.145.98:2986";
    }

    return "DIRECT";
}
