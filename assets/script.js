function gerarPdf() {
    let itens = document.querySelector('body').innerHTML

    let conteudo = window.open('')
    conteudo.document.write('<html><head>')
    conteudo.document.write('<title>Ficha de inscrição</title></head>')
    conteudo.document.write('<body')
    conteudo.document.write(itens)
    conteudo.document.write('</body></html>')
    conteudo.document.close()
    conteudo.print()
  
        
}


 /*
    const item = document.querySelector('body').innerHTML

    
    var opt = {
        margin: 1,
        filename: 'ficha.pdf',
        html2canvas: {scala: 1},
        jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'},
    }

        html2pdf().set(opt).from(item).save();*/