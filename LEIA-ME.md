# Site oficial — Nicolexxx

Site estático (HTML + CSS + JS, sem build). Basta subir a pasta inteira para a hospedagem.

## Pendências antes de publicar
| Item | Onde trocar |
|---|---|
| Domínio oficial | trocar `https://dominio-pendente.example` em todos os arquivos (index, termos, privacidade, robots.txt, sitemap.xml) |
| Link do Instagram | `index.html`, cartão marcado `PENDENTE: link do Instagram` |
| Link do Grupo VIP | `index.html`, cartão marcado `PENDENTE: link do Grupo VIP` |
| Responsável pelo site e contato de privacidade | `privacidade.html` (seção "Quem é responsável") e `termos.html` (Contato) |
| Provedor de hospedagem | `privacidade.html` (seção "Hospedagem e serviços de terceiros") |
| Textos de apresentação | `index.html` — frase da capa e seção "Meu universo" são provisórios, aguardando aprovação da cliente |
| Autorização das fotos | confirmar por escrito que a cliente autorizou o uso das 6 fotos |

Trocar o domínio de uma vez (Git Bash, dentro da pasta):
```bash
sed -i 's#https://dominio-pendente.example#https://SEU-DOMINIO#g' *.html robots.txt sitemap.xml
```

## Fotos
- `capa` e `universo`: nítidas (lingerie).
- `previa-1..4`: geradas já desfocadas (reduzidas a 90 px e desfocadas antes de salvar). Os originais nítidos dessas quatro **não** estão na pasta.
- `compartilhar.jpg`: imagem de 1200x630 para o link no WhatsApp/redes (foto desfocada + nome).

## Privacidade
- Sem caixa de cookies na página inicial. As escolhas ficam em `privacidade.html#preferencias` (aceitar, recusar, revogar).
- Único recurso opcional: Google Fonts. Sem consentimento, o site usa fontes do aparelho (Georgia/Segoe UI).

## Logo
- `assets/logo.svg`: monograma "N" em estilo clássico, dourado, dentro de um círculo duplo com dois losangos e uma chama acobreada (o toque ruivo).
- Na abertura ela aparece animada (o círculo se desenha, o N surge e a chama acende) antes do nome.
- O ícone da aba (`icone.svg` e `icone-180/192/512.png`) usa a mesma logo.

## Estrutura (Vite, compatível com a Lovable)
- `index.html` na raiz; `public/` guarda termos, privacidade, imagens, CSS, JS, robots.txt e sitemap.xml (copiados sem alteração).
- Rodar local: `npm install` e `npm run dev` (porta 8080). Publicar: `npm run build` gera `dist/`.
- Com isso, os caminhos das pendências acima ficam em `public/` (ex.: `public/privacidade.html`).
