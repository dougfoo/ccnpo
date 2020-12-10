Plan for CC-NPO (what does CC stand for I don't recall)

1. Website to upload resumes
2. Scraper to get more resumes to test with
3. NLP tooling to read PDF MSWord and potentially LinkedIn (likely get banned)
    Do we use basic tokenization and keywords or n-gram approach or BERT like approach?
    Someone needs to label some good/ideal resumes per domain
    Similarity features to ideal resumes?  (cosine sim etc using a pretrained model?)
    Potential dimensions to look at:
      - Length of resume & # of words
      - Format visually
      - Completeness (missing gaps of employment dates?)
      - 

4. Results dashboard of NLP processed resumes
5. Human review interface

Other resources/articles of use:

NLP experience w/ Resumes:
  https://towardsdatascience.com/do-the-keywords-in-your-resume-aptly-represent-what-type-of-data-scientist-you-are-59134105ba0d
  Libraries: PyPDF2, Spacy, VectorCount/TFIDF
  Techniques: count keywords, cosine sim

Pretty standard approach (Undergrad project)
  https://github.com/meghnalohani/Resume-Scoring-using-NLP/blob/master/RESUME%20SCORING%20USING%20NLP.pdf
  Word2Vec, PyPDF2, Spacy

Semi commercial thing SOVEN claims to be the best
  https://www.sovren.com/


