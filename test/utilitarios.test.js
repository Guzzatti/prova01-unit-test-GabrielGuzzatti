const Utilitarios = require("../src/utilitarios");

describe("Utilitarios", () => {
  let util;

  beforeEach(() => {
    util = new Utilitarios();
  });

  test("inverterString", () => {
    expect(util.inverterString("abc")).toBe("cba");
  });

  test("primeiraLetraMaiuscula", () => {
    expect(util.primeiraLetraMaiuscula("guzzatti")).toBe("Guzzatti");
  });

  test("paraMaiusculas / paraMinusculas", () => {
    expect(util.paraMaiusculas("abc")).toBe("ABC");
    expect(util.paraMinusculas("ABC")).toBe("abc");
  });

  test("somar / subtrair / multiplicar", () => {
    expect(util.somar(2, 3)).toBe(5);
    expect(util.subtrair(7, 2)).toBe(5);
    expect(util.multiplicar(3, 4)).toBe(12);
  });

  test("dividir: ok e erro por zero", () => {
    expect(util.dividir(10, 2)).toBe(5);
    expect(() => util.dividir(1, 0)).toThrow("Divisão por zero");
  });

  test("ehPar", () => {
    expect(util.ehPar(4)).toBe(true);
    expect(util.ehPar(5)).toBe(false);
  });

  test("primeiroElemento / ultimoElemento / tamanhoArray", () => {
    const arr = [1, 2, 3];
    expect(util.primeiroElemento(arr)).toBe(1);
    expect(util.ultimoElemento(arr)).toBe(3);
    expect(util.tamanhoArray(arr)).toBe(3);
  });

  test("ordenarArray / inverterArray", () => {
    expect(util.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
    expect(util.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("gerarNumeroAleatorio (mock de Math.random)", () => {
    const original = Math.random;
    Math.random = () => 0.42;
    expect(util.gerarNumeroAleatorio(10)).toBe(4);
    Math.random = original;
  });

  test("ehNumero", () => {
    expect(util.ehNumero(5)).toBe(true);
    expect(util.ehNumero("5")).toBe(false);
    expect(util.ehNumero(NaN)).toBe(false);
  });

  test("removerEspacos / contarPalavras", () => {
    expect(util.removerEspacos("  teste  ")).toBe("teste");
    expect(util.contarPalavras("  olá   mundo bonito ")).toBe(3);
  });

  test("mediaArray: normal e vazio", () => {
    expect(util.mediaArray([1, 2, 3, 4])).toBe(2.5);
  });

  test("removerDuplicados / ehPalindromo / mesclarObjetos", () => {
    expect(util.removerDuplicados([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
    expect(util.ehPalindromo("Roma me tem amor")).toBe(true);
    expect(util.mesclarObjetos({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });
});