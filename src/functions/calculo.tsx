import { useState } from "react"

export function Calculo() {

    let setResultado = 0
    const [gerador, setGerador] = useState<string[]>([])
    const [display, setDisplay] = useState<string>('0')
    const [valor, setValor] = useState<string>()

    const [somaRevisao, setSomaRevisao] = useState(false)
    const [subtracaoRevisao, setSubtracaoRevisao] = useState(false)
    const [multiplicacaoRevisao, setMultiplicacaoRevisao] = useState(false)
    const [divisaoRevisao, setDivisaoRevisao] = useState(false)

    function handleDisplay(valor: string) {
        setGerador((prev) => {
            const novoGerador = [...prev, valor];
            setDisplay(novoGerador.join(''));
            return novoGerador;
        });
    }

    function handleSoma() {
        setValor(display);
        setGerador([]);
        setSomaRevisao(true);
        setDisplay('0')
    }

    function handleSubtracao() {
        setValor(display);
        setGerador([]);
        setSubtracaoRevisao(true);
        setDisplay('0')
    }

    function handleMultiplicacao() {
        setValor(display);
        setGerador([]);
        setMultiplicacaoRevisao(true);
        setDisplay('0')
    }

    function handleDivisao() {
        setValor(display);
        setGerador([]);
        setDivisaoRevisao(true);
        setDisplay('0')
    }

    function handlePoncentagem() {
        if (display) {
            const novoResultado = (Number(display) / 100) * Number(valor!);
            setResultado = novoResultado;
            setDisplay(novoResultado.toString());
        }
    }

    function handleC() {
        setGerador([])
        setDisplay('0')
    }

    function handleReset() {
        setGerador([])
        setDisplay('0')
        setValor('')
        setSomaRevisao(false)
        setSubtracaoRevisao(false)
        setMultiplicacaoRevisao(false)
        setDivisaoRevisao(false)
    }

    function handleResultado() {
        if (somaRevisao) {
            const novoResultado = Number(valor) + Number(display);
            setResultado = novoResultado;

            const resultadoFormatado = novoResultado % 1 === 0 ? novoResultado.toString() : novoResultado.toFixed(2).toString();
            setDisplay(resultadoFormatado);

            setSomaRevisao(false);
        }
        if (subtracaoRevisao) {
            const novoResultado = Number(valor) - Number(display)

            const resultadoFormatado = novoResultado % 1 === 0 ? novoResultado.toString() : novoResultado.toFixed(2).toString();
            setDisplay(resultadoFormatado)

            setSubtracaoRevisao(false)
        }
        if (multiplicacaoRevisao) {
            const novoResultado = Number(valor) * Number(display)

            const resultadoFormatado = novoResultado % 1 === 0 ? novoResultado.toString() : novoResultado.toFixed(2).toString();
            setDisplay(resultadoFormatado)

            setMultiplicacaoRevisao(false)
        }
        if (divisaoRevisao) {
            const novoResultado = Number(valor) / Number(display)

            const resultadoFormatado = novoResultado % 1 === 0 ? novoResultado.toString() : novoResultado.toFixed(2).toString();
            setDisplay(resultadoFormatado)

            setDivisaoRevisao(false)
        }
    }

    return {
        handleDisplay, handleSoma, handleSubtracao, handleMultiplicacao, handleDivisao,
        handlePoncentagem, handleC, handleReset, handleResultado, display
    }

}