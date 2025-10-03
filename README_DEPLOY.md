# Deploy rápido (GitHub → Vercel)

1. Crie um repositório no GitHub e envie estes arquivos (pasta raiz deste ZIP).
2. Na Vercel: **Add New → Project → Import Git Repository** → escolha seu repo → **Deploy**.
3. Ajustes:
   - **Meta Pixel**: edite `index.html` e troque `REPLACE_WITH_YOUR_PIXEL_ID` pelo seu ID real.
   - **UTMify** e **Cartpanda** já estão incluídos no `<head>` (se não existiam).
   - Arquivo `vercel.json` inclui cabeçalhos de segurança básicos.

## Observações
- Evite arquivos únicos acima de 25MB no upload via navegador do GitHub. Use Git via desktop/CLI se necessário.
- Para vídeos grandes, prefira incorporar via YouTube/Vimeo não listado.
- Para domínio próprio: adicione em **Vercel → Domains** e aponte o DNS conforme instruções da Vercel.