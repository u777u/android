function Language(lang) {
	var words = {};
	var __construct = function() {
		if (typeof lang === 'undefined') {
			lang = "en";
		}
		return;
	}

	this.push = function(word, text) {
		words[word] = text;

		return;
	}
	this.get = function(word, defaultString) {
		return words[word] || defaultString;
	}
	this.render = function(optional) {
		if (typeof optional == "object") {
			optional.forEach((word) => {
				var text = words[word];

				Dom7('[data-lang="' + word + '"]').text(text);
			});
		} else if (typeof optional === "undefined") {
			Object.keys(words).forEach((word) => {
				var text = words[word];

				Dom7('[data-lang="' + word + '"]').text(text);
			});
		}
	}
}
function useLang(lang) {
	switch(lang) {
		case 'id':
			var Lang = new Language('id');

			Lang.push('referral_help', 'Dapatkan komisi sebesar 10% dari setiap hasil claim referral kamu. Komisi akan di tambahkan secara otomatis jika sudah 1 DOGE.');
			Lang.push('withdrawal_attention', 'Semua permintaan penarikan akan di prosess secara otomatis setelah permintaan penarikan di kirim');
			Lang.push('referral_code_help', 'Tekan kode referral untuk copy ke clipboard');
			Lang.push('minimum_withdrawal', 'Saldo minimal yang bisa di tarik adalah');
			Lang.push('fee_withdrawal', 'Biaya penarikan saldo sebesar ');
			Lang.push('request_withdrawal', 'Permintaan Penarikan');
			Lang.push('current_address', 'Alamat Wallet Sekarang');
			Lang.push('current_earning', 'Pendapatan Sekarang');
			Lang.push('estimated_receive', 'Estimasi diterima');
			Lang.push('referral_earn', 'Pendapatan Ajakan');
			Lang.push('referral_title', 'Jumlah Ajakan');
			Lang.push('send_request', 'Kirim Permintaan');
			Lang.push('withdrawal_title', 'Penarikan');
			Lang.push('referral_code', 'Kode Ajakan');
			Lang.push('claim_now', 'Klaim Sekarang');
			Lang.push('earning_title', 'Pendapatan');
			Lang.push('history_title', 'Riwayat');
			Lang.push('donate_us', 'Bantu Kami');
			Lang.push('attention', 'Perhatian');
			Lang.push('amount', 'Jumlah');
			Lang.push('news', 'Berita');

			Lang.push('success', 'Berhasil');
			Lang.push('pending', 'Masuk Antrian');
			Lang.push('approved', 'Disetujui');
			Lang.push('processed', 'Diprosess');

			Lang.render();
			break;
		case 'us': 
			var Lang = new Language('us');

			Lang.push('referral_help', 'Get 10% free commission from coin claimed by your referral , Commission will be added automatically after the amount least than 1 DOGE');
			Lang.push('withdrawal_attention', 'All Withdrawal requests are processed automatically immediantely after submitting a withdrawal request.');
			Lang.push('referral_code_help', 'Click the referral code to copy and share to other');
			Lang.push('minimum_withdrawal', 'Minimum withdrawal is');
			Lang.push('request_withdrawal', 'Request Withdrawal');
			Lang.push('estimated_receive', 'Estimated Receive');
			Lang.push('fee_withdrawal', 'Withdrawal Fee is');
			Lang.push('current_address', 'Current Address');
			Lang.push('current_earning', 'Current Earning');
			Lang.push('referral_earn', 'Referral Earn');
			Lang.push('withdrawal_title', 'Withdrawal');
			Lang.push('referral_code', 'Referral Code');
			Lang.push('send_request', 'Send Request');
			Lang.push('referral_title', 'Referrals');
			Lang.push('earning_title', 'Earning');
			Lang.push('history_title', 'History');
			Lang.push('donate_us', 'Donate Us');
			Lang.push('claim_now', 'Claim Now');
			Lang.push('attention', 'Attention');
			Lang.push('amount', 'Amount');
			Lang.push('news', 'News');

			Lang.push('success', 'Success');
			Lang.push('pending', 'Pending');
			Lang.push('approved', 'Approved');
			Lang.push('processed', 'Processed');

			Lang.render();
			break;
		case 'ptg':
			var Lang = new Language('ptg');

			Lang.push('withdrawal_attention', 'Todas as solicitações de retirada são processadas automaticamente imediatamente depois de enviar um pedido de retirada.');
			Lang.push('fee_withdrawal', 'A Taxa (Fee) de retirada é');
			Lang.push('estimated_receive', 'Recebimento Estimado');
			Lang.push('request_withdrawal', 'Pedido de retirada');
			Lang.push('referral_code', 'Código de Referência');
			Lang.push("minimum_withdrawal", "Retirada mínima");
			Lang.push('current_address', 'Endereço atual');
			Lang.push('current_earning', 'Ganhos atuais');
			Lang.push('referral_earn', 'Consulta Ganhe');
			Lang.push('send_request', 'Enviar pedido');
			Lang.push('withdrawal_title', 'Retirada');
			Lang.push('referral_title', 'Referrals');
			Lang.push('history_title', 'Histórico');
			Lang.push('earning_title', 'Earnning');
			Lang.push('claim_now', 'Claim Now');
			Lang.push('donate_us', 'Dona-nos');
			Lang.push('attention', 'Atenção');
			Lang.push('amount', 'Quantidade');
			Lang.push('news', 'Notícias');

			Lang.push('success', 'Success');
			Lang.push('pending', 'Pending');
			Lang.push('approved', 'Approved');
			Lang.push('processed', 'Processed');

			Lang.render();
			break;
		default:
			break;
	}
}

