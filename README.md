# Point Burguer — site pronto para GitHub Pages

Site responsivo em HTML, CSS e JavaScript, com imagens e fontes locais. Não precisa de npm, banco de dados ou serviço pago. O arquivo `index.html` funciona ao abrir diretamente; os testes foram feitos também em servidor local, sob `/point-burguee/`.

## Publicar no repositório point-burguee

1. Entre na sua conta do GitHub e abra **point-burguee**. Não crie outro repositório. Se ele já tem conteúdo, confira os arquivos existentes antes de substituir arquivos de mesmo nome.
2. Em **Settings → Pages → Build and deployment → Source**, escolha **GitHub Actions**.
3. Na aba **Code**, use **Add file → Upload files**. Envie o CONTEÚDO desta pasta para a raiz da branch **main**, preservando as subpastas. `index.html` deve ficar na raiz, não dentro de outra pasta `point-burguee`. Envie os arquivos extraídos; não envie somente o ZIP.
4. Inclua a pasta oculta **.github** e o arquivo **.nojekyll**. Se a interface não enviar a pasta oculta, use **Add file → Create new file**, escreva `.github/workflows/pages.yml` no nome e copie o conteúdo do arquivo correspondente entregue neste projeto.
5. Confirme o envio em **Commit changes**. Na aba **Actions**, acompanhe **Publicar Point Burguer**. Se necessário, selecione **Run workflow → main → Run workflow**.
6. Quando o processo terminar com sucesso, abra **Settings → Pages → Visit site**. Essa será a URL pública real. O projeto não presume o nome de usuário da sua conta.

O processo configura automaticamente Open Graph com URL absoluta, canonical, sitemap e robots.txt a partir do endereço real fornecido pelo GitHub. As mudanças seguintes na branch `main` republicam o site. Se a branch usada tiver outro nome, ajuste `branches: [main]` em `.github/workflows/pages.yml`.

GitHub Free permite Pages em repositórios públicos. Não alteramos a visibilidade do seu repositório. Caso ele seja privado, verifique a disponibilidade do Pages no seu plano.

Referência: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Estrutura

- `index.html`: conteúdo, SEO, links e dados estruturados Restaurant.
- `style.css`: visual, fontes locais e regras responsivas.
- `script.js`: mensagens do WhatsApp, menu e configuração de endereço.
- `assets/images/`: fotos oficiais otimizadas, logo, imagem social e placeholder opcional da fachada.
- `assets/fonts/`: fontes locais e respectivas licenças.
- `assets/whatsapp.svg`: ícone do canal de pedido.
- `.github/workflows/pages.yml`: publicação automática.
- `preparar-publicacao.py`: preparação do diretório `_site` e metadados públicos; executado automaticamente no GitHub, sem pacotes externos.
- `PESQUISA.md`: fontes, confirmações e pendências.
- `TESTES.md`: verificações realizadas e seus limites.

## Atualizar informações

**WhatsApp:** configuração `POINT.whatsapp` em `script.js`. Atualize também os links de segurança em `index.html`, o telefone visível e o telefone do JSON-LD. Os links de segurança funcionam mesmo sem JavaScript.

**Endereço:** o site identifica explicitamente o endereço como divulgado no Google Maps. Depois da confirmação pela empresa, edite `address-detail` no HTML e `POINT.mapQuery` no JavaScript. Para alterar só a linha de endereço via configuração, preencha `POINT.address`. Atualize também o link de mapa do HTML. Só inclua rua/número no JSON-LD quando confirmados.

**Dias de atendimento:** a bio informa 19h às 23h30, mas não diz os dias. O site não anuncia “aberto agora” e não inventa dias. Depois de confirmar, atualize o texto e adicione `openingHoursSpecification` ao JSON-LD.

**Fotos:** substitua os arquivos em `assets/images/`, mantendo os nomes ou ajustando os caminhos e textos alternativos do HTML. Não use links temporários do Instagram. O placeholder `estabelecimento-placeholder.svg` está identificado e não é exibido como foto real. Pode ser substituído por uma foto de fachada/ambiente e inserido na seção sobre a empresa. Não foi usada foto de outra hamburgueria.

**Cardápio:** adicione produtos e preços apenas depois de confirmar. Cada link com `data-order` recebe a mensagem inicial; `data-product` acrescenta o assunto à conversa.

## Status da entrega

Projeto publicado no GitHub Pages em https://edwardd23.github.io/point-burguee/. O workflow `Publicar Point Burguer` está configurado para republicar alterações na branch `main`.

