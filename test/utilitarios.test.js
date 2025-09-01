// utilitarios.test.js
const Utilitarios = require("../src/utilitarios");

describe("Testes da classe Utilitarios", () => {
  let util;

  beforeEach(() => {
    util = new Utilitarios();
  });

  test("inverterString deve inverter a string", () => {
    expect(util.inverterString("abc")).toBe("cba");
  });

  test("contarCaracteres deve retornar o tamanho da string", () => {
    expect(util.contarCaracteres("teste")).toBe(5);
  });

  test("paraMaiusculas deve converter para maiúsculas", () => {
    expect(util.paraMaiusculas("abc")).toBe("ABC");
  });

  test("paraMinusculas deve converter para minúsculas", () => {
    expect(util.paraMinusculas("ABC")).toBe("abc");
  });

  test("primeiraLetraMaiuscula deve deixar apenas a primeira letra maiúscula", () => {
    expect(util.primeiraLetraMaiuscula("guzzatti")).toBe("Guzzatti");
  });

  test("somar deve retornar a soma correta", () => {
    expect(util.somar(2, 3)).toBe(5);
  });

  test("subtrair deve retornar a subtração correta", () => {
    expect(util.subtrair(5, 3)).toBe(2);
  });

  test("multiplicar deve retornar a multiplicação correta", () => {
    expect(util.multiplicar(2, 4)).toBe(8);
  });

  test("dividir deve retornar a divisão correta", () => {
    expect(util.dividir(10, 2)).toBe(5);
  });

  test("dividir deve lançar erro quando divisor for zero", () => {
    expect(() => util.dividir(10, 0)).toThrow("Divisão por zero");
  });

  test("ehPar deve identificar números pares", () => {
    expect(util.ehPar(4)).toBe(true);
    expect(util.ehPar(5)).toBe(false);
  });

  test("primeiroElemento deve retornar o primeiro item", () => {
    expect(util.primeiroElemento([1, 2, 3])).toBe(1);
  });

  test("ultimoElemento deve retornar o último item", () => {
    expect(util.ultimoElemento([1, 2, 3])).toBe(3);
  });

  test("tamanhoArray deve retornar o tamanho do array", () => {
    expect(util.tamanhoArray([1, 2, 3])).toBe(3);
  });

  test("ordenarArray deve retornar array ordenado", () => {
    expect(util.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test("inverterArray deve retornar array invertido", () => {
    expect(util.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("gerarNumeroAleatorio deve gerar número dentro do limite", () => {
    const num = util.gerarNumeroAleatorio(10);
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(10);
  });

  test("ehNumero deve validar números corretamente", () => {
    expect(util.ehNumero(5)).toBe(true);
    expect(util.ehNumero("5")).toBe(false);
    expect(util.ehNumero(NaN)).toBe(false);
  });

  test("removerEspacos deve remover espaços extras", () => {
    expect(util.removerEspacos("  teste  ")).toBe("teste");
  });

  test("repetirTexto deve repetir string corretamente", () => {
    expect(util.repetirTexto("ab", 3)).toBe("ababab");
  });

  test("juntarArray deve juntar itens com separador", () => {
    expect(util.juntarArray(["a", "b", "c"], "-")).toBe("a-b-c");
  });

  test("contarPalavras deve contar palavras corretamente", () => {
    expect(util.contarPalavras("olá mundo bonito")).toBe(3);
  });

  test("mediaArray deve calcular a média", () => {
    expect(util.mediaArray([1, 2, 3, 4])).toBe(2.5);
    expect(util.mediaArray([])).toBe(0);
  });

  test("removerDuplicados deve remover elementos repetidos", () => {
    expect(util.removerDuplicados([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
  });

  test("ehPalindromo deve identificar palíndromos", () => {
    expect(util.ehPalindromo("Ana")).toBe(true);
    expect(util.ehPalindromo("roma me tem amor")).toBe(true);
    expect(util.ehPalindromo("teste")).toBe(false);
  });

  test("mesclarObjetos deve juntar as propriedades", () => {
    expect(util.mesclarObjetos({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });
});
